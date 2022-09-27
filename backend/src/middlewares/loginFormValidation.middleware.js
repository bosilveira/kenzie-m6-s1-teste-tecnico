import * as yup from "yup"

const loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
})

const loginFormValidation = async (request, response, next) => {
    try {
        const data = await loginSchema.validate(request.body)
        request.body = data
    } catch (error) {
        request.body = {...request.body, validationError: error.message}
    }
    next()
}

export default loginFormValidation