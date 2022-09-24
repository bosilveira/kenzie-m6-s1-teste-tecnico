import { v4 as uuidv4 } from "uuid"
import { postgresDB } from "../databases/postgres.database"
import { vanillaDB } from "../databases/vanilla.database"

const saveClientService = async data => {
    const {name, emails, phones} = data
    let client

    // Postgres Database Connection
    if (process.env.NODE_ENV === "dev-postgres") {
        try {
            const result = await postgresDB.query(
                `INSERT INTO
                    clients (name, emails, phones)
                VALUES
                    ($1, $2, $3)
                RETURNING
                    id, name, emails, phones, created_at;`,
                [name, emails.join(";"), phones.join(";")]
            )
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
        const client_uuid = uuidv4()
        const now = new Date()
        client = {
            id: client_uuid,
            name,
            emails,
            phones,
            created_at: now.toJSON()
        }
        vanillaDB.clients.push(client)
    }

    return {
        id: client.id,
        name: client.name,
        emails: client.emails,
        phones: client.phones,
        created_at: client.created_at
    }
}

export default saveClientService