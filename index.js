// import express modules and create an express app
const express = require("express");
const app = express();

// import routes for collections
const todoRoutes = require("./routes/todoRoutes");
const todoListRoutes = require("./routes/todoListRoutes");

// use env configuration
const dotenv = require("dotenv").config();

// import middleware
// logging
const morgan = require("morgan");
// cors
const cors = require("cors");

// configuration of the port of our webserver
const PORT = process.env.PORT;

// import functionality from the file db.js
const connectDb = require("./config/db");

// connect to the database
connectDb();

// middleware to parse json for all incoming requests
app.use(express.json());
// activate logging middleware
app.use(morgan("combined"));
// activate cors middleware
app.use(cors());

app.use("/api/todos/", todoRoutes);
app.use("/api/todoLists/", todoListRoutes);

// start the webserver on the configured port
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
