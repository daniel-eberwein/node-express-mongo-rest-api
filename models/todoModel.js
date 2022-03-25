const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  listName: {
    type: String,
  },
  done: {
    type: Boolean,
  },
});

module.exports = mongoose.model("ToDo", todoSchema);
