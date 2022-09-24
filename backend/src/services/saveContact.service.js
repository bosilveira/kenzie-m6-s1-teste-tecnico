import { v4 as uuidv4 } from "uuid"
import { postgresDB } from "../databases/postgres.database"
import { vanillaDB } from "../databases/vanilla.database"

const saveContactService = async data => {
    let {client_uuid, name, emails, phones} = data
    let contact

    // Postgres Database Connection
    if (process.env.NODE_ENV === "dev-postgres") {
        try {
            const client = await postgresDB.query(
                `SELECT
                    *
                FROM
                    clients
                WHERE
                    id = $1;`,
                [client_uuid]
            )
            if(!client.rowCount){
                throw new Error("Client not found")
            }
            const result = await postgresDB.query(
                `INSERT INTO
                    contacts (client, name, emails, phones)
                VALUES
                    ($1, $2, $3, $4)
                RETURNING
                    id, name, emails, phones, client;`,
                [client_uuid, name, emails.join(";"), phones.join(";")]
            )
            contact = {
                id: result.rows[0].id,
                name: result.rows[0].name,
                emails: result.rows[0].emails.length > 0 ? result.rows[0].emails.split(";") : [],
                phones: result.rows[0].phones.length > 0 ? result.rows[0].phones.split(";") : [],
                client: result.rows[0].client
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    // Javascript Vanilla Database Connection
    if (process.env.NODE_ENV === "dev-js") {
        const contact_uuid = uuidv4()
        const client = vanillaDB.clients.find(entry => entry.id === client_uuid)
        if(client === undefined){
            throw new Error("Client not found")
        }
        contact = {
            id: contact_uuid,
            name,
            emails,
            phones,
            client: client_uuid
        }
        vanillaDB.contacts.push(contact)
    }

    return {
        id: contact.id,
        name: contact.name,
        emails: contact.emails,
        phones: contact.phones,
        client: contact.client
    }
}

export default saveContactService