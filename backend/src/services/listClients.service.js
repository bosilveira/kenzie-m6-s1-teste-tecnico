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
            return result.rows
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