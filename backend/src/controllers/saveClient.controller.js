import saveClientService from "../services/saveClient.service"

const saveClientController = async (request, response) => {
    if (request.body.validationError !== undefined) {
        return response.status(401).json({ message: request.body.validationError })
    }
    try {
        const client = await saveClientService(request.body)
        return response.status(201).json(client)
    } catch (error) {
        return response.status(400).json({ message: error.message })
    }
}

export default saveClientController