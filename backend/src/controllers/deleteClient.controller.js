import deleteClientService from "../services/deleteClient.service"

const deleteClientController = async (request, response) => {
    if (request.body.validationError !== undefined) {
        return response.status(401).json({ message: request.body.validationError })
    }
    const client_uuid = await request.params.client_uuid
    try {
        await deleteClientService({ client_uuid })
        return response.status(200).json({ message: "Client deleted with success" })
    } catch (error) {
        return response.status(400).json({ message: error.message })
    }
}

export default deleteClientController