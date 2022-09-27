import { postgresDB } from "../databases/postgres.database"
import { vanillaDB } from "../databases/vanilla.database"

const updateClientService = async data => {
    let {client_uuid, name, emails, phones} = data
    let client

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
            name ??= result_client.rows[0].name
            emails ??= result_client.rows[0].emails
            phones ??= result_client.rows[0].phones
            const update = await postgresDB.query(
                `UPDATE
                    clients
                SET
                    name = $1, emails = $2, phones = $3
                WHERE
                    id = $4
                RETURNING
                    id, name, emails, phones, created_at;`,
                [name, emails, phones, client_uuid]
            )
            client = {
                id: update.rows[0].id,
                name: update.rows[0].name,
                emails: update.rows[0].emails.length > 0 ? update.rows[0].emails.split(";") : [],
                phones: update.rows[0].phones.length > 0 ? update.rows[0].phones.split(";") : [],
                created_at: update.rows[0].created_at
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    // Javascript Vanilla Database Connection
    if (process.env.NODE_ENV === "dev-js") {
        const result_client = vanillaDB.clients.find(entry => entry.id === client_uuid)
        if(result_client === undefined){
            throw new Error("Client not found")
        }
        name ??= result_client.name
        emails ??= [ ...result_client.emails ]
        phones ??= [ ...result_client.phones ]
        vanillaDB.clients.map(entry=>{
            if (entry.id === client_uuid) {
                entry.name = name
                entry.emails = emails
                entry.phones = phones
            }
            return entry
        })
        client = vanillaDB.clients.find(entry => entry.id === client_uuid)
    }

    return {
        id: client.id,
        name: client.name,
        emails: client.emails,
        phones: client.phones,
        created_at: client.created_at
    }
}

export default updateClientService