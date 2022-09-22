import { postgresDB } from "../databases/postgres.database"
import { vanillaDB } from "../databases/vanilla.database"

const updateClientService = async data => {
    let {uuid, name, emails, phones} = data

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
                [uuid]
            )
            if(!client.rowCount){
                throw new Error("Entry not found")
            }

            name ??= client.rows[0].name
            emails ??= [ ...client.rows[0].emails ]
            phones ??= [ ...client.rows[0].phones ]

            const result = await postgresDB.query(
                `UPDATE
                    clients
                SET
                    name = $1, emails = $2, phones = $3
                RETURNING
                    id, name, emails, phones, created_at;`,
                [name, emails, phones]
            )
            return result.rows[0]
        } catch (error) {
            throw new Error(error)
        }
    }

    // Javascript Vanilla Database Connection
    if (process.env.NODE_ENV === "dev-js") {
        const client = vanillaDB.clients.find(entry => entry.id === uuid)
        if(client === undefined){
            throw new Error("Entry not found")
        }

        name ??= client.name
        emails ??= [ ...client.emails ]
        phones ??= [ ...client.phones ]

        vanillaDB.clients.map(entry=>{
            if (entry.id === uuid) {
                entry.name = name
                entry.emails = emails
                entry.phones = phones
            }
            return entry
        })
        const result = vanillaDB.clients.find(entry => entry.id === uuid)
        return {
            id: result.id,
            name: result.name,
            emails: result.emails,
            phones: result.phones,
            created_at: result.created_at
        }
    }
}

export default updateClientService