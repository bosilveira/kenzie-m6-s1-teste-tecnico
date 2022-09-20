import listClientsService from "../services/listClients.service"

const listClientsController = async (request, response) => {
    if (request.body.validationError !== undefined) {
        return response.status(401).json({ message: request.body.validationError })
    }
    try {
        const list = await listClientsService()
        return response.status(200).json(list)
    } catch (error) {
        return response.status(400).json({ message: error.message })
    }
}

export default listClientsController