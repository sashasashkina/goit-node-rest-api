import Contact from "../models/Contact.js";

export const listContacts = () => Contact.find({}, "-createdAt -updatedAt");

export const addContact = (data) => Contact.create(data);

export const getContactById = async (id) => {
  const data = await Contact.findById(id);
  return data;
};

export const updateById = (id, data) => Contact.findByIdAndUpdate(id, data);

export const removeContact = (id) => Contact.findByIdAndDelete(id);

export const updateStatusById = (id, data) =>
  Contact.findByIdAndUpdate(id, data);
