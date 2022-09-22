import { Router } from "express"

import adminAccessValidation from "../middlewares/adminAccessValidation.middleware"
import clientSaveFormValidation from "../middlewares/clientSaveFormValidation.middleware"
import clientUpdateFormValidation from "../middlewares/clientUpdateFormValidation.middleware"

import deleteClientController from "../controllers/deleteClient.controller"
import getClientController from "../controllers/getClient.controller"
import listClientsController from "../controllers/listClients.controller"
import saveClientController from "../controllers/saveClient.controller"
import updateClientController from "../controllers/updateClient.controller"

const clientsRouter = Router()

clientsRouter.get("", adminAccessValidation, listClientsController)
clientsRouter.post("", adminAccessValidation, clientSaveFormValidation, saveClientController)
clientsRouter.get("/info/:uuid", adminAccessValidation, getClientController)
clientsRouter.patch("/info/:uuid", adminAccessValidation, clientUpdateFormValidation, updateClientController)
clientsRouter.delete("/info/:uuid", adminAccessValidation, deleteClientController)

export default clientsRouter