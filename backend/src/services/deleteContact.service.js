import { postgresDB } from "../databases/postgres.database"
import { vanillaDB } from "../databases/vanilla.database"

const deleteContactService = async data => {
    const { client_uuid, contact_uuid } = data

    // Postgres Database Connection
    if (process.env.NODE_ENV === "dev-postgres") {
        try {
            const check_client = await postgresDB.query(
                `SELECT
                    *
                FROM
                    clients
                WHERE
                    id = $1;`,
                [client_uuid]
            )
            if(!check_client.rowCount){
                throw new Error("Client not found")
            }
            const check_contact = await postgresDB.query(
                `SELECT
                    *
                FROM
                    contacts
                WHERE
                    id = $1;`,
                [contact_uuid]
            )
            if(!check_contact.rowCount){
                throw new Error("Contact not found")
            }
            const result = await postgresDB.query(
                `DELETE FROM
                contacts
                WHERE
                    id = $1;`,
                [contact_uuid]
            )
            return true
        } catch (error) {
            throw new Error(error)
        }
    }

    // Javascript Vanilla Database Connection
    if (process.env.NODE_ENV === "dev-js") {
        const check_client = vanillaDB.clients.find(entry => entry.id === client_uuid)
        if(check_client === undefined){
            throw new Error("Client not found")
        }
        let index = -1
        vanillaDB.contacts.forEach((entry, i) => {
            if (entry.id === contact_uuid) {
                index = i
            }
        })
        if(index === -1){
            throw new Error("Contact not found")
        }
        vanillaDB.contacts.splice(index, 1)
        return true
    }

}

export default deleteContactService