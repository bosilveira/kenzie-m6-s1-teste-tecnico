import { postgresDB } from "../databases/postgres.database"
import { vanillaDB } from "../databases/vanilla.database"

const getContactService = async data => {
    const { client_uuid, contact_uuid } = data
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
            contact = {
                id: result_contact.rows[0].id,
                name: result_contact.rows[0].name,
                emails: result_contact.rows[0].emails.length > 0 ? result_contact.rows[0].emails.split(";") : [],
                phones: result_contact.rows[0].phones.length > 0 ? result_contact.rows[0].phones.split(";") : [],
                client: result_contact.rows[0].client
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    // Javascript Vanilla Database Connection
    if (process.env.NODE_ENV === "dev-js") {
        let client = vanillaDB.clients.find(entry => entry.id === client_uuid)
        if(client === undefined){
            throw new Error("Client not found")
        }
        contact = vanillaDB.contacts.find(entry => entry.id === contact_uuid)
        if(contact === undefined){
            throw new Error("Contact not found")
        }
    }
    
    return {
        id: contact.id,
        name: contact.name,
        emails: contact.emails,
        phones: contact.phones,
        client: contact.client
    }
}

export default getContactService