import getClientService from "../services/getClient.service"

const getClientController = async (request, response) => {
    if (request.body.validationError !== undefined) {
        return response.status(401).json({ message: request.body.validationError })
    }
    const uuid = await request.params.uuid
    try {
        const client = await getClientService({ uuid })
        return response.status(200).json(client)
    } catch (error) {
        return response.status(400).json({ message: error.message })
    }
}

export default getClientController