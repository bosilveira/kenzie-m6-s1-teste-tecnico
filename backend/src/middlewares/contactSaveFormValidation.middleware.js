import * as yup from "yup";

const contactSaveSchema = yup.object().shape({
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
    //client: yup.string().required(),
})

const contactSaveFormValidation = async (request, response, next) => {
    try {
        const data = await contactSaveSchema.validate(request.body)
        request.body = data
    } catch (error) {
        request.body = {...request.body, validationError: error.message}
    }
    next()
}

export default contactSaveFormValidation