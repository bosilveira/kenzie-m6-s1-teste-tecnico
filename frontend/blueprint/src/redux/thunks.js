import axios from "axios"

export const loginThunk = (username, password, path) => (dispatch) => {
    dispatch({
        type: "@login.database",
        payload: {
            username: username,
            token: "",
            path: path,
            connected: false,
            log: Date.now()
        }
    })
    dispatch({
        type: "@status",
        payload: {
            message: "Connecting to database",
            icon: "fetching",
            log: Date.now()
        }
    })
    axios.post(path + "/login", {
        username,
        password,
    }, { headers: { "Content-Type": "application/json" } })
        .then((success) => {
            dispatch({
                type: "@login.database",
                payload: {
                    username: username,
                    token: success.data.token,
                    path: path,
                    connected: true,
                    log: Date.now()
                }
            })
            dispatch({
                type: "@status",
                payload: {
                    message: "Connected to database",
                    icon: "ok",
                    log: Date.now()
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: "@status",
                payload: {
                    message: "Login error",
                    icon: "error",
                    error: error.message,
                    log: Date.now()
                }
            })
        }
    )
}

export const logoutThunk = () => (dispatch) => {
    dispatch({
        type: "@logout.database",
        payload:  {
            username: "",
            token: "",
            path: "",
            connected: false,
            log: Date.now()
        }
    });
    dispatch({
        type: "@status",
        payload: {
            message: "Logout",
            log: Date.now()
          }
    })
}

const credentials = () => {
  const connection = JSON.parse(localStorage.getItem("connection"))
  if (connection && connection.token) {
    return {
        headers: {
            "Content-Type": "application/json" ,
            "Authorization": "Bearer " + connection.token,
            "x-access-token": connection.token
        },
        path: connection.path
    }
  } else {
    return {}
  }
}

export const listClientsThunk = () => (dispatch) => {
    dispatch({
        type: "@status",
        payload: {
            message: "Connecting to database",
            icon: "fetching",
            log: Date.now()
        }
    })
    axios.get(credentials().path + "/clients", { headers: credentials().headers })
        .then((success) => {
            dispatch({
                type: "@load.database",
                payload: {
                    data: success.data,
                    log: Date.now()
                }
            })
            dispatch({
                type: "@status",
                payload: {
                    message: "List updated: " + success.data.length + " entry(ies)" ,
                    icon: "ok",
                    log: Date.now()
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: "@status",
                payload: {
                    message: "Database/connection error",
                    icon: "error",
                    error: error.message,
                    log: Date.now()
                }
            })
        }
    )
}

export const getClientThunk = (id) => (dispatch) => {
    dispatch({
        type: "@status",
        payload: {
            message: "Connecting to database",
            icon: "fetching",
            log: Date.now()
        }
    })
    axios.get(credentials().path + "/clients/" + id, { headers: credentials().headers })
        .then((success) => {
            dispatch({
                type: "@load.client.database",
                payload: {
                    client: success.data,
                    log: Date.now()
                }
            })
            dispatch({
                type: "@status",
                payload: {
                    message: "Client updated: " + id,
                    icon: "ok",
                    log: Date.now()
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: "@status",
                payload: {
                    message: "Database/connection error",
                    icon: "error",
                    error: error.message,
                    log: Date.now()
                }
            })
        }
    )
}

export const createClientThunk = (name, emails, phones) => (dispatch) => {
    dispatch({
        type: "@status",
        payload: {
            message: "Connecting to database",
            icon: "fetching",
            log: Date.now()
        }
    })
    axios.post(credentials().path + "/clients", {name, emails, phones}, { headers: credentials().headers })
        .then((success) => {
            dispatch({
                type: "@create.client.database",
                payload: {
                    client: success.data,
                    log: Date.now()
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: "@status",
                payload: {
                    message: "Database/connection error",
                    icon: "error",
                    error: error.message,
                    log: Date.now()
                }
            })
        }
    )
}

export const createContactThunk = (client_id, name, emails, phones) => (dispatch) => {
    dispatch({
        type: "@status",
        payload: {
            message: "Connecting to database",
            icon: "fetching",
            log: Date.now()
        }
    })
    axios.post(credentials().path + "/clients/" + client_id + "/contacts", {name, emails, phones}, { headers: credentials().headers })
        .then((success) => {
            dispatch({
                type: "@create.contact.database",
                payload: {
                    contact: success.data,
                    log: Date.now()
                }
            })
        })
        .catch((error) => {
            dispatch({
                type: "@status",
                payload: {
                    message: "Database/connection error",
                    icon: "error",
                    error: error.message,
                    log: Date.now()
                }
            })
        }
    )
}

