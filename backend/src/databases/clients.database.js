import { Client } from "pg"

// Postgres Database
export const clientsPGDB = new Client({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    })

export const startDatabase = async () => {
    console.log("connection", process.env.DB_HOST, process.env.DB_PORT, process.env.DB_USER)
    await usersPGDB.connect()
}

// Javascript Vanilla Database
export const clientsJSDB = []

const clientsDatabase = process.env.NODE_ENV === "dev-postgres" ? clientsPGDB : clientsJSDB

export default clientsDatabase