import { Schema, model } from "mongoose";

const contactSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  favorite: Boolean,
});

const Contact = model("movie", contactSchema);

export default Contact;
