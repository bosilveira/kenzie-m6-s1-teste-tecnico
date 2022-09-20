import clientDatabase from "../databases/clients.jsdb";

const getClientService = async data => {
    const { uuid } = data
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
    }}

export default getClientService