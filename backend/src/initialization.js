import * as bcrypt from "bcryptjs"
import "dotenv/config"
import { postgresDB } from "./databases/postgres.database"
import { vanillaDB } from "./databases/vanilla.database"


// Database Superuser (admin) initialization - for test/development only
export const createAdminJS = async (username, password) => {
    const hashedAdminPassword = await bcrypt.hash(password, 12)    
    vanillaDB.users.push({
        username,
        password: hashedAdminPassword
    })
}
export const createAdminPG = async (username, password) => {
    const hashedAdminPassword = await bcrypt.hash(password, 12)    
    try {
        await postgresDB.query(
            `INSERT INTO
                users (username, password)
            VALUES
                ($1, $2);`,
            [username, hashedAdminPassword]
        )
    } catch (error) {
        console.log("postgres database user admin creation error:", error)
    }
}

