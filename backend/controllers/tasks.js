const Tasks = require('../models/Tasks');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.status(201).json({tasks});
  } catch (err) {
    res.status(404).json(err);
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    res.status(201).json({task}); 
  } catch (err) {
    res.status(404).json(err);
  }
}

const getTask = async (req, res) => {
  try {
    const {id} = req.params;
    const task = await Tasks.findById(id);
    res.status(201).json({task}); 
  } catch (err) {
    res.status(404).json(err);
  }
}

const updateTask = async (req, res) => {
  try {
    const {id} = req.params;
    const task = await Tasks.findByIdAndUpdate(id, req.body, {
      new: true, 
      runValidators: true, 
    });
    res.status(201).json({task}); 
  } catch (err) {
    res.status(404).json(err);
  }
}

const deleteTask = async (req, res) => {
  try {
    const {id} = req.params;
    const task = await Tasks.findByIdAndDelete(id);
    res.status(201).json({task}); 
  } catch (err) {
    res.status(404).json(err);
  }
}

module.exports = {
  getAllTasks, 
  getTask, 
  createTask, 
  updateTask, 
  deleteTask,
}