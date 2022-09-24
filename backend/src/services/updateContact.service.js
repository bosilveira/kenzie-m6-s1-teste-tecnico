import { postgresDB } from "../databases/postgres.database"
import { vanillaDB } from "../databases/vanilla.database"

const updateContactService = async data => {
    let {client_uuid, contact_uuid, name, emails, phones} = data
    let contact

    // Postgres Database Connection
    if (process.env.NODE_ENV === "dev-postgres") {
        try {
            const result_client = await postgresDB.query(
                `SELECT
                    *
                FROM
                    clients
                WHERE
                    id = $1;`,
                [client_uuid]
            )
            if(!result_client.rowCount){
                throw new Error("Client not found")
            }
            const result_contact = await postgresDB.query(
                `SELECT
                    *
                FROM
                    contacts
                WHERE
                    id = $1;`,
                [contact_uuid]
            )
            if(!result_contact.rowCount){
                throw new Error("Contact not found")
            }
            name ??= result_contact.rows[0].name
            emails ??= result_contact.rows[0].emails
            phones ??= result_contact.rows[0].phones
            const update = await postgresDB.query(
                `UPDATE
                    contacts
                SET
                    name = $1, emails = $2, phones = $3
                WHERE
                    id = $4
                RETURNING
                    id, name, emails, phones, client;`,
                [name, emails, phones, contact_uuid]
            )
            contact = {
                id: update.rows[0].id,
                name: update.rows[0].name,
                emails: update.rows[0].emails.length > 0 ? update.rows[0].emails.split(";") : [],
                phones: update.rows[0].phones.length > 0 ? update.rows[0].phones.split(";") : [],
                client: update.rows[0].client
            }            
        } catch (error) {
            throw new Error(error)
        }
    }

    // Javascript Vanilla Database Connection
    if (process.env.NODE_ENV === "dev-js") {
        const result_client = vanillaDB.clients.find(entry => entry.id === client_uuid)
        if(result_client === undefined){
            throw new Error("Client not found")
        }
        const result_contact = vanillaDB.contacts.find(entry => entry.id === contact_uuid)
        if(result_contact === undefined){
            throw new Error("Contact not found")
        }
        name ??= result_contact.name
        emails ??= [ ...result_contact.emails ]
        phones ??= [ ...result_contact.phones ]
        vanillaDB.contacts.map(entry=>{
            if (entry.id === client_uuid) {
                entry.name = name
                entry.emails = emails
                entry.phones = phones
            }
            return entry
        })
        contact = vanillaDB.contacts.find(entry => entry.id === contact_uuid)
    }

    return {
        id: contact.id,
        name: contact.name,
        emails: contact.emails,
        phones: contact.phones,
        client: contact.client
    }
}

export default updateContactService