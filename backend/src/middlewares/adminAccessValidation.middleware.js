import jwt from "jsonwebtoken"

const secret = "b3aa5a34064756df6b629dc1a9071c84e55565efb09629d2986fcd0c418569ab"

const adminAccessValidation = async (request, response, next) => {
    if (!request.body.invalidData) {
        const token = request.headers.authorization?.split(" ")[1]
        request.body = {...request.body, token}
        if (!token) {
            request.body = {...request.body, invalidData: "Authorized personnel only"}
        } else {
            jwt.verify(token, secret, (error, decoded) => {
                if(error){
                    request.body = {...request.body, validationError: "Invalid token"}
                } else {
                    request.body = {...request.body, uuid: decoded.uuid, isAdm: decoded.isAdm}
                }
            })
        }
    } 
    next()
}

export default adminAccessValidation