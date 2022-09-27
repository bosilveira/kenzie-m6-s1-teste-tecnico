import saveContactService from "../services/saveContact.service"

const saveContactController = async (request, response) => {
    if (request.body.validationError !== undefined) {
        return response.status(401).json({ message: request.body.validationError })
    }
    const client_uuid = await request.params.client_uuid
    try {
        const client = await saveContactService({ ...request.body, client_uuid })
        return response.status(201).json(client)
    } catch (error) {
        return response.status(400).json({ message: error.message })
    }
}

export default saveContactController