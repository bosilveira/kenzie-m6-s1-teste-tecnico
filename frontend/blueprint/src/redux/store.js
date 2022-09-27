import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { databaseReducer, statusReducer } from "./reducers"

const reducers = combineReducers({ 
    database: databaseReducer,
    status: statusReducer
 })

const store = createStore(reducers, applyMiddleware(thunk))

export default store