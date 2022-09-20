import clientDatabase from "../databases/clients.jsdb"

const updateClientService = async data => {
    const {uuid, name, emails, phones} = data
    clientDatabase.map(entry=>{
        if (entry.uuid === uuid) {
            entry.name = name ?? entry.name
            entry.emails = emails ?? entry.emails
            entry.phones = phones ?? entry.phones
        }
        return entry
    })
    const client = clientDatabase.find(entry => entry.uuid === uuid)
    if(client === undefined){
        throw new Error("Entry not found")
    }
    return {
        uuid: client.uuid,
        createdAt: client.createdAt,
        name: client.name,
        emails: client.emails,
        phones: client.phones
    }
}

export default updateClientService