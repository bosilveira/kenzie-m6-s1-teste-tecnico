import updateContactService from "../services/updateContact.service"

const updateContactController = async (request, response) => {
    if (request.body.validationError !== undefined) {
        return response.status(401).json({ message: request.body.validationError })
    }
    const client_uuid = await request.params.client_uuid
    const contact_uuid = await request.params.contact_uuid
    try {
        const client = await updateContactService({ ...request.body, client_uuid, contact_uuid })
        return response.status(201).json(client)
    } catch (error) {
        return response.status(400).json({ message: error.message })
    }
}

export default updateContactController