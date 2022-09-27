import { postgresDB } from "../databases/postgres.database"
import { vanillaDB } from "../databases/vanilla.database"

const getClientService = async data => {
    const { client_uuid } = data
    let client
    let contacts

    // Postgres Database Connection
    if (process.env.NODE_ENV === "dev-postgres") {
        try {
            const result = await postgresDB.query(
                `SELECT
                    *
                FROM
                    clients
                WHERE
                    id = $1;`,
                [client_uuid]
            )
            if(!result.rowCount){
                throw new Error("Client not found")
            }

            const result_contacts = await postgresDB.query(
                `SELECT
                    *
                FROM
                    contacts
                WHERE
                    client = $1;`,
                [client_uuid]
            )
            contacts = result_contacts.rows.map(contact => contact = {
                id: contact.id,
                name: contact.name,
                emails: contact.emails.length > 0 ? contact.emails.split(";") : [],
                phones: contact.phones.length > 0 ? contact.phones.split(";") : [],
                client: contact.client
            })

            client = {
                id: result.rows[0].id,
                name: result.rows[0].name,
                emails: result.rows[0].emails.length > 0 ? result.rows[0].emails.split(";") : [],
                phones: result.rows[0].phones.length > 0 ? result.rows[0].phones.split(";") : [],
                created_at: result.rows[0].created_at
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    // Javascript Vanilla Database Connection
    if (process.env.NODE_ENV === "dev-js") {
        client = vanillaDB.clients.find(entry => entry.id === client_uuid)
        if(client === undefined){
            throw new Error("Client not found")
        }
        contacts = vanillaDB.contacts.filter((entry) => entry.client === client_uuid)

    }
    
    return {
        id: client.id,
        name: client.name,
        emails: client.emails,
        phones: client.phones,
        created_at: client.created_at,
        contacts
    }
}

export default getClientService