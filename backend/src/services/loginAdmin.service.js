import * as bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { postgresDB } from "../databases/postgres.database"
import { vanillaDB } from "../databases/vanilla.database"

const secret = "b3aa5a34064756df6b629dc1a9071c84e55565efb09629d2986fcd0c418569ab"

const loginAdminService = async data => {
    const { username, password } = data
    let user

    // Postgres Database Connection
    if (process.env.NODE_ENV === "dev-postgres") {
        try {
            const result = await postgresDB.query(
                `SELECT
                    username, password
                FROM
                    users
                WHERE
                    username = $1;`,
                [username]
            )
            if(!result.rowCount){
                throw new Error("Invalid credentials")
            }
            user = result.rows[0]
        } catch (error) {
            throw new Error(error)
        }
    }

    // Javascript Vanilla Database Connection
    if (process.env.NODE_ENV === "dev-js") {
        user = vanillaDB.users.find(entry => entry.username === username)
        if(!user){
            throw new Error("Invalid credentials")
        }
    }

    // Admin validation
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