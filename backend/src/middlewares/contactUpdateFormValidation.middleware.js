import * as yup from "yup";

const contactUpdateSchema = yup.object().shape({
    name: yup.string(),
    emails: yup.array()
        .min(1, "Invalid array of emails")
        .transform((value) => Array.from(new Set(value)))
        .of(yup.string().email()),
    phones: yup.array()
        .min(1, "Invalid array of phones")
        .transform((value) => Array.from(new Set(value)))
        .of(yup.string()),
})

const contactUpdateFormValidation = async (request, response, next) => {
    try {
        const data = await contactUpdateSchema.validate(request.body)
        request.body = data
    } catch (error) {
        request.body = {...request.body, validationError: error.message}
    }
    next()
}

export default contactUpdateFormValidation