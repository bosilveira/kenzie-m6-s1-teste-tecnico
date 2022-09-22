import { postgresDB } from "../databases/postgres.database"
import { vanillaDB } from "../databases/vanilla.database"

const deleteClientService = async data => {
    const { uuid } = data

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
                [uuid]
            )
            if(!check.rowCount){
                throw new Error("Entry not found")
            }
            const result = await postgresDB.query(
                `DELETE FROM
                    clients
                WHERE
                    id = $1;`,
                [uuid]
            )
            return true
        } catch (error) {
            throw new Error(error)
        }
    }

    // Javascript Vanilla Database Connection
    if (process.env.NODE_ENV === "dev-js") {
        const check = vanillaDB.clients.find(entry => entry.id === uuid)
        if(check === undefined){
            throw new Error("Entry not found")
        }
        let index = -1
        vanillaDB.clients.forEach((entry, i) => {
            if (entry.id === uuid) {
                index = i
            }
        })
        if(index === -1){
            throw new Error("Entry not found")
        }
        vanillaDB.clients.splice(index, 1)
        return true
    }

}

export default deleteClientService