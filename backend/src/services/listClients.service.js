import { postgresDB } from "../databases/postgres.database"
import { vanillaDB } from "../databases/vanilla.database"

const listClientsService = async data => {

    // Postgres Database Connection
    if (process.env.NODE_ENV === "dev-postgres") {
        try {
            const result = await postgresDB.query(
                `SELECT
                    *
                FROM
                    clients;`,
            )
            const clients = result.rows.map(client => client = {
                id: client.id,
                name: client.name,
                emails: client.emails.length > 0 ? client.emails.split(";") : [],
                phones: client.phones.length > 0 ? client.phones.split(";") : [],
                created_at: client.created_at
            })
            return clients
        } catch (error) {
            throw new Error(error)
        }
    }

    // Javascript Vanilla Database Connection
    if (process.env.NODE_ENV === "dev-js") {
       return vanillaDB.clients
    }
}

export default listClientsService