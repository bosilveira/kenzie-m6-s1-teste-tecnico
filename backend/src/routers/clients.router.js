import { Router } from "express"

import adminAccessValidation from "../middlewares/adminAccessValidation.middleware"
import clientExistsValidation from "../middlewares/clientExistsValidation.middleware"
import clientFormValidation from "../middlewares/clientFormValidation.middleware"

import deleteClientController from "../controllers/deleteClient.controller"
import getClientController from "../controllers/getClient.controller"
import listClientsController from "../controllers/listClients.controller"
import saveClientController from "../controllers/saveClient.controller"
import updateClientController from "../controllers/updateClient.controller"

const clientsRouter = Router()

clientsRouter.get("", adminAccessValidation, listClientsController)
clientsRouter.post("", adminAccessValidation, clientFormValidation, saveClientController)
clientsRouter.get("/info/:uuid", adminAccessValidation, clientExistsValidation, getClientController)
clientsRouter.patch("/info/:uuid", adminAccessValidation, clientExistsValidation, clientFormValidation, updateClientController)
clientsRouter.delete("/info/:uuid", adminAccessValidation, clientExistsValidation, deleteClientController)

export default clientsRouter