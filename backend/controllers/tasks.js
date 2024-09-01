const Tasks = require('../models/Tasks');
const asyncWrapper = require('../middleware/asyncWrapper');

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Tasks.find({});
  res.status(201).json({tasks});
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await Tasks.create(req.body);
    res.status(201).json({task}); 
})

const getTask = asyncWrapper(async (req, res, next) => {
    const {id} = req.params;
    const task = await Tasks.findById(id);
    if ( task === null ){
      const error = new Error();
      error.status = 404;
      error.message = "Can't find the desired task";

      return next(error);
    }
    res.status(201).json({task}); 
})

const updateTask = asyncWrapper(async (req, res, next) => {
    const {id} = req.params;
    const task = await Tasks.findByIdAndUpdate(id, req.body, {
      new: true, 
      runValidators: true, 
    });
    if ( task === null ){
      const error = new Error();
      error.status = 404;
      error.message = "Can't find the desired task";

      return next(error);
    }

    res.status(201).json({task}); 
})

const deleteTask = asyncWrapper(async (req, res, next) => {
    const {id} = req.params;
    const task = await Tasks.findByIdAndDelete(id);
    if ( task === null ){
      const error = new Error();
      error.status = 404;
      error.message = "Can't find the desired task";

      return next(error);
    }
    res.status(201).json({task}); 
})

module.exports = {
  getAllTasks, 
  getTask, 
  createTask, 
  updateTask, 
  deleteTask,
}