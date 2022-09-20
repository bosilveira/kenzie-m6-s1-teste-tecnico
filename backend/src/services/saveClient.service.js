import { v4 as uuidv4 } from "uuid"
import clientDatabase from "../databases/clients.jsdb"

const saveClientService = async data => {
    const {name, emails, phones} = data
    const uuid = uuidv4()
    const now = new Date()
    const client = {
        uuid,
        createdAt: now.toJSON(),
        name,
        emails,
        phones
    }
    clientDatabase.push(client)
    return {
        uuid: client.uuid,
        createdAt: client.createdAt,
        name: client.name,
        emails: client.emails,
        phones: client.phones
    }
}

export default saveClientService