const mongoose = require("mongoose");
const { Schema } = mongoose;

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  descreption: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "Genral",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("note", NoteSchema);