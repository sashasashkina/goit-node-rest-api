import express from "express";
import { ctrl } from "../controllers/contactsControllers.js";
import validateBody from "../helpers/validateBody.js";
import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas.js";

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAllContacts);

// contactsRouter.get("/:id", ctrl.getOneContact);

// contactsRouter.delete("/:id", ctrl.deleteContact);

contactsRouter.post("/", ctrl.createContact);

// contactsRouter.put(
//   "/:id",
//   validateBody(updateContactSchema),
//   ctrl.updateContact
// );

export default contactsRouter;
