import clientDatabase from "../databases/clients.jsdb"

const deleteClientService = async data => {
    const { uuid } = data
    let index = -1
    clientDatabase.forEach((entry, i) => {
        if (entry.uuid === uuid) {
            index = i
        }
    })
    if(index === -1){
        throw new Error("Entry not found")
    }
    clientDatabase.splice(index, 1)
    return data
}

export default deleteClientService