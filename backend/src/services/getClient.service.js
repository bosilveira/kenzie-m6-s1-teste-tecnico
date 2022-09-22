import { postgresDB } from "../databases/postgres.database"
import { vanillaDB } from "../databases/vanilla.database"

const getClientService = async data => {
    const { uuid } = data
    let client

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
                [uuid]
            )
            if(!result.rowCount){
                throw new Error("Entry not found")
            }
            client = result.rows[0]
        } catch (error) {
            throw new Error(error)
        }
    }

    // Javascript Vanilla Database Connection
    if (process.env.NODE_ENV === "dev-js") {
        client = vanillaDB.clients.find(entry => entry.id === uuid)
        if(client === undefined){
            throw new Error("Entry not found")
        }
    }
    
    return {
        id: client.id,
        name: client.name,
        emails: client.emails,
        phones: client.phones,
        created_at: client.created_at
    }}

export default getClientService