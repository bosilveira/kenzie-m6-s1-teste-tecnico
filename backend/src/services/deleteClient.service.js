import { postgresDB } from "../databases/postgres.database"
import { vanillaDB } from "../databases/vanilla.database"

const deleteClientService = async data => {
    const { client_uuid } = data

    // Postgres Database Connection
    if (process.env.NODE_ENV === "dev-postgres") {
        try {
            const check = await postgresDB.query(
                `SELECT
                    *
                FROM
                    clients
                WHERE
                    id = $1;`,
                [client_uuid]
            )
            if(!check.rowCount){
                throw new Error("Client not found")
            }
            const result = await postgresDB.query(
                `DELETE FROM
                    clients
                WHERE
                    id = $1;`,
                [client_uuid]
            )
            return true
        } catch (error) {
            throw new Error(error)
        }
    }

    // Javascript Vanilla Database Connection
    if (process.env.NODE_ENV === "dev-js") {
        let index = -1
        vanillaDB.clients.forEach((entry, i) => {
            if (entry.id === client_uuid) {
                index = i
            }
        })
        if(index === -1){
            throw new Error("Client not found")
        }
        vanillaDB.clients.splice(index, 1)
        const filter = vanillaDB.contacts.filter((entry) => entry.client !== client_uuid)
        vanillaDB.contacts = [ ...filter ]
        return true
    }

}

export default deleteClientService