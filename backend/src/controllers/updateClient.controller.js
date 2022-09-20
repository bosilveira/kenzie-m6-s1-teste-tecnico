import updateClientService from "../services/updateClient.service"

const updateClientController = async (request, response) => {
    if (request.body.validationError !== undefined) {
        return response.status(401).json({ message: request.body.validationError })
    }
    const uuid = await request.params.uuid
    try {
        const client = await updateClientService({ ...request.body, uuid })
        return response.status(201).json(client)
    } catch (error) {
        return response.status(400).json({ message: error.message })
    }
}

export default updateClientController