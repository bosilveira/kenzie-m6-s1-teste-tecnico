import * as yup from "yup";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
const emailIsValid = (email) => emailRegex.test(email)

const clientSchema = yup.object().shape({
    name: yup.string().required(),
    emails: yup.string()
        .transform((value) => Array.from(new Set(value.split(';'))).join(';'))
        .test(
            "emails",
            "Invalid email format",
            (value) => value && value.split(';').every(emailIsValid)
        ),
    phones: yup.string()
        .transform((value) => Array.from(new Set(value.split(';'))).join(';'))
})

const clientFormValidation = async (request, response, next) => {
    try {
        const data = await clientSchema.validate(request.body)
        request.body = data
    } catch (error) {
        request.body = {...request.body, validationError: error.message}
    }
    next()
}

export default clientFormValidation