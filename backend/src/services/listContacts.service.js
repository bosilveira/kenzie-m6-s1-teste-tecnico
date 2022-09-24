import { postgresDB } from "../databases/postgres.database"
import { vanillaDB } from "../databases/vanilla.database"

const listContactsService = async data => {
    const { client_uuid } = data

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
            const result = await postgresDB.query(
                `SELECT
                    *
                FROM
                    contacts
                WHERE
                    client = $1;`,
                [client_uuid]
            )
            const contacts = result.rows.map(contact => contact = {
                id: contact.id,
                name: contact.name,
                emails: contact.emails.length > 0 ? contact.emails.split(";") : [],
                phones: contact.phones.length > 0 ? contact.phones.split(";") : [],
                client: contact.client
            })
            return contacts
        } catch (error) {
            throw new Error(error)
        }
    }

    // Javascript Vanilla Database Connection
    if (process.env.NODE_ENV === "dev-js") {
       return vanillaDB.contacts.filter((entry) => entry.client === client_uuid)
    }

}

export default listContactsService
