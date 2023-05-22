const express = require("express");
require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");
const cors = require("cors");
const {
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("./controller/todoController");
mongoose.connect(process.env.MONGO_URL);

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/todo", getTodo);
app.post("/api/todo/add", addTodo);
app.put("/api/todo/:id", updateTodo);
app.delete("/api/todo/:id", deleteTodo);

mongoose.connection.once("open", () => {
  console.log("Mongo DB Connected");
  app.listen(5000, console.log("http://localhost:5000"));
});
