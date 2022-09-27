import loginAdminService from "../services/loginAdmin.service"

const loginAdminController = async (request, response) => {
    if (request.body.validationError !== undefined) {
        return response.status(401).json({ message: request.body.validationError })
    }
    try {
        const token = await loginAdminService(request.body)
        return response.status(200).json({ token })
    } catch (error) {
        return response.status(400).json({ message: error.message })
    }
}

export default loginAdminController