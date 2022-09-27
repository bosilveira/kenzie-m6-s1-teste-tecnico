const connection = JSON.parse(localStorage.getItem("connection"))

const initialState = connection && connection.token
    ? { ...connection } : { 
        username: "",
        token: "",
        path: "",
        connected: false,
        log: Date.now(),
        data: []
     }

export const databaseReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case "@login.database": 
            localStorage.clear()
            localStorage.setItem("connection", JSON.stringify(payload))
            return payload
        case "@logout.database":
            localStorage.clear()
            localStorage.setItem("connection", JSON.stringify(payload))
            return payload
        case "@load.database":
            localStorage.setItem("connection", JSON.stringify({ ...state, ...payload }))
            return { ...state, ...payload }
        case "@load.client.database":
            localStorage.setItem("connection", JSON.stringify({ ...state, ...payload }))
            return { ...state, ...payload }
        case "@create.client.database":
            window.location.assign("/clients/" + payload.client.id)
            return { ...state, ...payload }
        case "@create.contact.database":
            window.location.assign("/clients/" + payload.contact.client)
            return { ...state, ...payload }
        case "@load.contact.database":
            localStorage.setItem("connection", JSON.stringify({ ...state, ...payload }))
            return { ...state, ...payload }
                default:
            return state
    }
}

export const statusReducer = (state = {
    message: "Idle",
    icon: "fetching",
    log: Date.now()
}, action) => {
    const { type, payload } = action
    switch (type) {
        case "@status": 
            return payload
        default:
            return state
    }
}