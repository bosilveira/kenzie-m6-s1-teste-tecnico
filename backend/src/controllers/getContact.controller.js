import getContactService from "../services/getContact.service"

const getContactController = async (request, response) => {
    if (request.body.validationError !== undefined) {
        return response.status(401).json({ message: request.body.validationError })
    }
    const client_uuid = await request.params.client_uuid
    const contact_uuid = await request.params.contact_uuid
    try {
        const contact = await getContactService({ client_uuid, contact_uuid })
        return response.status(200).json(contact)
    } catch (error) {
        return response.status(400).json({ message: error.message })
    }
}

export default getContactController