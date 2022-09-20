import * as bcrypt from "bcryptjs"
import "dotenv/config"
import express from "express"
import userDatabase from "./databases/users.jsdb"
import clientsRouter from "./routers/clients.router"
import loginRouter from "./routers/login.router"


const createAdmin = async (username, password) => {
    const hashedAdminPassword = await bcrypt.hash(password, 12)    
    userDatabase.push({
        username,
        password: hashedAdminPassword
    })
}

if (process.env.NODE_ENV === "dev-js") {
    createAdmin("admin", "12345")
}

const app = express()
app.use(express.json())
app.use('/login', loginRouter)
app.use('/clients', clientsRouter)

const port = process.env.NODE_PORT || 5000
const environment = process.env.NODE_ENV || "default"

app.listen(port, () => {
    console.log(`Running on ${port}; environment ${environment}`)
})
    
export default app