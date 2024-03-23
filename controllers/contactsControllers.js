import * as contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

export const getAllContacts = async (req, res) => {
  const result = await contactsService.listContacts();
  res.json(result);
};

export const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.getContactById(id);

  if (!result) {
    throw HttpError(404, `Contact with id =${id} not found`);
  }
  res.json(result);
};

export const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.removeContact(id);
  if (!result) {
    throw HttpError(404, `Contact with id =${id} not found`);
  }
  res.json(result);
};

export const createContact = async (req, res) => {
  const result = await contactsService.addContact(req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.status(201).json(result);
};

export const updateContact = async (req, res) => {
  const { id } = req.params;
  if (Object.keys(req.body).length === 0) {
    throw HttpError(400, "Body must have at least one field");
  }
  const result = await contactsService.updateById(id, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.status(201).json(result);
};

export const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const favoredContact = await contactsService.updateStatusById(id, req.body, {
    new: true,
  });
  if (!favoredContact) {
    throw HttpError(404);
  }
  res.status(200).json(favoredContact);
};

export const ctrl = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  deleteContact: ctrlWrapper(deleteContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
