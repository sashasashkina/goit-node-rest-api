import Contact from "../models/Contact.js";

export const listContacts = () => Contact.find();

// export async function getContactById(id) {
//   const contacts = await listContacts();
//   const result = contacts.find((item) => item.id === id);
//   return result || null;
// }

// export async function addContact(name, email, phone) {
//   const contacts = await listContacts();
//   const newContact = {
//     id: nanoid(),
//     name,
//     email,
//     phone,
//   };
//   contacts.push(newContact);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

//   return newContact;
// }

// export async function removeContact(id) {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((item) => item.id === id);
//   if (index === -1) {
//     return null;
//   }
//   const [removedContact] = contacts.splice(index, 1);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return removedContact;
// }

// export async function updateById(id, data) {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((item) => item.id === id);
//   if (index === -1) {
//     return null;
//   }
//   contacts[index] = { ...contacts[index], ...data };

//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

//   return contacts[index];
// }
