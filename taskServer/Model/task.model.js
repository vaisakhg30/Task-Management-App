const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/task");

const taskSchema = new mongoose.Schema({
  id: {
    required: true,
    type: String,
  },
  taskname: {
    required: true,
    type: String,
  },
  taskdescription: {
    required: true,
    type: String,
  },
  taskenquiry: {
    required: true,
    type: String,
  },
});

module.exports = new mongoose.model("tasktable", taskSchema);
