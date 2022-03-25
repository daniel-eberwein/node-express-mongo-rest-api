const express = require("express");
const router = express.Router();

// import ToDo schema
const ToDo = require("../models/todoModel");

// get all
router.get("/", async (req, res) => {
  const todos = await ToDo.find();
  res.json(todos);
});

// get one by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await ToDo.findById(id);
    res.json(todo);
  } catch (error) {
    res.status(404).send();
  }
});

// create one
router.post("/", async (req, res) => {
  const todo = await ToDo.create({
    text: req.body.text,
    listName: req.body.listName,
    done: false,
  });
  res.status(201).json(todo);
});

// update one
router.put("/:id", async (req, res) => {
  // check if the todo that should be updated is available
  try {
    let todo = await ToDo.findById(req.params.id);
  } catch (err) {
    res.status(404).send();
  }

  // if the todo is available, then update it
  const updatedToDo = await ToDo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  // return the updated todo
  res.json(updatedToDo);
});

// delete one
router.delete("/:id", async (req, res) => {
  // check if the desired todo is available
  try {
    let todo = await ToDo.findById(req.params.id);
  } catch (err) {
    // if it is not available, return 404 - Not Found
    res.status(404).send();
  }

  // if it is available, then delete it
  let deleted = await ToDo.findByIdAndDelete(req.params.id);
  res.json(deleted);
});

module.exports = router;
