import deleteContactService from "../services/deleteContact.service"

const deleteContactController = async (request, response) => {
    if (request.body.validationError !== undefined) {
        return response.status(401).json({ message: request.body.validationError })
    }
    const client_uuid = await request.params.client_uuid
    const contact_uuid = await request.params.contact_uuid
    try {
        await deleteContactService({ client_uuid, contact_uuid })
        return response.status(200).json({ message: "Contact deleted with success" })
    } catch (error) {
        return response.status(400).json({ message: error.message })
    }
}

export default deleteContactController