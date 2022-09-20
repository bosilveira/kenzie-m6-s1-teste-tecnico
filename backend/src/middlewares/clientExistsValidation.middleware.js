import clientDatabase from "../databases/clients.jsdb"

const clientExistsValidation = async (request, response, next) => {
    const uuid = await request.params.uuid
    const client = clientDatabase.find(entry => entry.uuid === uuid)
    if(client === undefined){
        request.body = {...request.body, validationError: "Client UUID invalid" }
    }
    next()
}

export default clientExistsValidation