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

app.get("/todo", getTodo);
app.post("/todo/add", addTodo);
app.put("/todo/:id", updateTodo);
app.delete("/todo/:id", deleteTodo);

mongoose.connection.once("open", () => {
  console.log("Mongo DB Connected");
  app.listen(5000, console.log("http://localhost:5000"));
});
