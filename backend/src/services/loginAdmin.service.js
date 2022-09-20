import * as bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import userDatabase from "../databases/users.jsdb"

const secret = "b3aa5a34064756df6b629dc1a9071c84e55565efb09629d2986fcd0c418569ab"

const loginAdminService = async data => {
    const { username, password } = data
    const user = userDatabase.find(entry => entry.username === username)
    if(!user){
        throw new Error("Invalid credentials")
    }
    const passwordValidation = await bcrypt.compare(password, user.password)
    if(!passwordValidation){
        throw new Error("Invalid credentials")
    }
    const token = jwt.sign({
        username: user.username
    }, secret, {
        expiresIn: "24h",
        subject: user.username
    })
    return token
}

export default loginAdminService