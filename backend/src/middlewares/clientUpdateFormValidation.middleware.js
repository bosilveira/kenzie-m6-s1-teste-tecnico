import * as yup from "yup";

const clientUpdateSchema = yup.object().shape({
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

const clientUpdateFormValidation = async (request, response, next) => {
    try {
        const data = await clientUpdateSchema.validate(request.body)
        request.body = data
    } catch (error) {
        request.body = {...request.body, validationError: error.message}
    }
    next()
}

export default clientUpdateFormValidation