import { Router } from "express"

import loginFormValidation from "../middlewares/loginFormValidation.middleware"

import loginAdminController from "../controllers/loginAdmin.controller"

const loginRouter = Router()

loginRouter.post("", loginFormValidation, loginAdminController)

export default loginRouter