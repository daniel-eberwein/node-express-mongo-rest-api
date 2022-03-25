const express = require("express");
const router = express.Router();

// import ToDoList schema
const ToDoList = require("../models/todoListModel");

// get all
router.get("/", async (req, res) => {
  const todoLists = await ToDoList.find();
  res.json(todoLists);
});

// get one by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const todoList = await ToDoList.findById(id);
    res.json(todoList);
  } catch (error) {
    res.status(404).send();
  }
});

// create one
router.post("/", async (req, res) => {
  console.log(req.body);
  const todoList = await ToDoList.create({
    name: req.body.name,
  });
  res.status(201).json(todoList);
});

// update one
router.put("/:id", async (req, res) => {
  // check if the todo that should be updated is available
  try {
    let todoList = await ToDoList.findById(req.params.id);
  } catch (err) {
    res.status(404).send();
  }

  // if the todo is available, then update it
  const updatedToDoList = await ToDoList.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  // return the updated todo
  res.json(updatedToDoList);
});

// delete one
router.delete("/:id", async (req, res) => {
  // check if the desired todo is available
  try {
    let todoList = await ToDoList.findById(req.params.id);
  } catch (err) {
    // if it is not available, return 404 - Not Found
    res.status(404).send();
  }

  // if it is available, then delete it
  let deleted = await ToDoList.findByIdAndDelete(req.params.id);
  res.json(deleted);
});

module.exports = router;
