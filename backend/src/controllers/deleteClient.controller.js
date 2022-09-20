import deleteClientService from "../services/deleteClient.service"

const deleteClientController = async (request, response) => {
    if (request.body.validationError !== undefined) {
        return response.status(401).json({ message: request.body.validationError })
    }
    const uuid = await request.params.uuid
    try {
        await deleteClientService({ uuid })
        return response.status(200).json({ message: "Entry deleted with success" })
    } catch (error) {
        return response.status(400).json({ message: error.message })
    }
}

export default deleteClientController