const TODO = require("./../modals/Todo");

exports.addTodo = async (req, res) => {
  try {
    const result = await TODO.create(req.body);

    res.json({
      message: "add todo success",
      result,
    });
  } catch (error) {
    res.json({
      message: "something went wrong" + error,
    });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const result = await TODO.find();
    // const result = await TODO.create({ //add to db
    // const result = await TODO.find({ //get all records
    // const result = await TODO.findByIdAndUpdate({
    // const result = await TODO.findByIdAndDelete({

    res.json({
      message: "Get todos success",
      result,
    });
  } catch (error) {
    res.json({
      message: "something went wrong" + error,
    });
  }
};
exports.updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const result = await TODO.findByIdAndUpdate(todoId, req.body, {
      new: true,
    });

    res.json({
      message: "Upade todos success",
      result,
    });
  } catch (error) {
    res.json({
      message: "something went wrong" + error,
    });
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const result = await TODO.findByIdAndDelete(todoId);

    res.json({
      message: "Delete todos success",
      result,
    });
  } catch (error) {
    res.json({
      message: "something went wrong" + error,
    });
  }
};
