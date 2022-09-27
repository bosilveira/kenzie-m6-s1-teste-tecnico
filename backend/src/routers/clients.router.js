import { Router } from "express"

import adminAccessValidation from "../middlewares/adminAccessValidation.middleware"
import clientSaveFormValidation from "../middlewares/clientSaveFormValidation.middleware"
import clientUpdateFormValidation from "../middlewares/clientUpdateFormValidation.middleware"
import contactSaveFormValidation from "../middlewares/contactSaveFormValidation.middleware"

import deleteClientController from "../controllers/deleteClient.controller"
import deleteContactController from "../controllers/deleteContact.controller"
import getClientController from "../controllers/getClient.controller"
import getContactController from "../controllers/getContact.controller"
import listClientsController from "../controllers/listClients.controller"
import listContactsController from "../controllers/listContacts.controller"
import saveClientController from "../controllers/saveClient.controller"
import saveContactController from "../controllers/saveContact.controller"
import updateClientController from "../controllers/updateClient.controller"
import updateContactController from "../controllers/updateContact.controller"

const clientsRouter = Router()

clientsRouter.get("", adminAccessValidation, listClientsController)
clientsRouter.post("", adminAccessValidation, clientSaveFormValidation, saveClientController)
clientsRouter.get("/:client_uuid", adminAccessValidation, getClientController)
clientsRouter.patch("/:client_uuid", adminAccessValidation, clientUpdateFormValidation, updateClientController)
clientsRouter.delete("/:client_uuid", adminAccessValidation, deleteClientController)
clientsRouter.get("/:client_uuid/contacts", adminAccessValidation, listContactsController)
clientsRouter.post("/:client_uuid/contacts", adminAccessValidation, contactSaveFormValidation, saveContactController)
clientsRouter.get("/:client_uuid/contacts/:contact_uuid", adminAccessValidation, getContactController)
clientsRouter.patch("/:client_uuid/contacts/:contact_uuid", adminAccessValidation, updateContactController, updateContactController)
clientsRouter.delete("/:client_uuid/contacts/:contact_uuid", adminAccessValidation, deleteContactController)

export default clientsRouter