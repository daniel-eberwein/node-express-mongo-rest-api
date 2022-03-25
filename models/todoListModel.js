const mongoose = require("mongoose");

const todoListSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ToDoList", todoListSchema);
