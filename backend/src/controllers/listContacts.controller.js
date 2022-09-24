import listContactsService from "../services/listContacts.service"

const listContactsController = async (request, response) => {
    if (request.body.validationError !== undefined) {
        return response.status(401).json({ message: request.body.validationError })
    }
    const client_uuid = await request.params.client_uuid
    try {
        const list = await listContactsService({ client_uuid })
        return response.status(200).json(list)
    } catch (error) {
        return response.status(400).json({ message: error.message })
    }
}

export default listContactsController