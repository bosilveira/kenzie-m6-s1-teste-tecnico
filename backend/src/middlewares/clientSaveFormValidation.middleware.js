import * as yup from "yup";

const clientSaveSchema = yup.object().shape({
    name: yup.string().required(),
    emails: yup.array()
        .required()
        .min(1, "Invalid array of emails")
        .transform((value) => Array.from(new Set(value)))
        .of(yup.string().email()),
    phones: yup.array()
        .required()
        .min(1, "Invalid array of phones")
        .transform((value) => Array.from(new Set(value)))
        .of(yup.string()),
})

const clientSaveFormValidation = async (request, response, next) => {
    try {
        const data = await clientSaveSchema.validate(request.body)
        request.body = data
    } catch (error) {
        request.body = {...request.body, validationError: error.message}
    }
    next()
}

export default clientSaveFormValidation