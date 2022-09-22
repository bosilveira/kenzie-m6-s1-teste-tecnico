import "dotenv/config"
import express from "express"
import { startPostgres } from "./databases/postgres.database"
import { createAdminJS, createAdminPG } from "./initialization"
import clientsRouter from "./routers/clients.router"
import loginRouter from "./routers/login.router"


const app = express()
app.use(express.json())
app.use('/login', loginRouter)
app.use('/clients', clientsRouter)

// Database Superuser (admin) initialization - for test/development only
if (process.env.NODE_ENV === "dev-js") {
    createAdminJS("admin", "12345")
}
if (process.env.NODE_ENV === "dev-postgres") {
    startPostgres()
    createAdminPG("admin", "12345")
}
// - - - - - - - - - -

const environment = process.env.NODE_ENV
const port = environment === "dev-js"? 3000 : 3001

app.listen(port, () => {
    console.log(`Running on ${port}; environment ${environment}`)
})
    
export default app