import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom"


const Edit = () => {
  const [searchParams] = useSearchParams();
  const [task, setTask] = useState(null);
  const [clicked, setClicked] = useState(false);
  let timeoutId;

  timeoutId = setTimeout(() => {
    setClicked(false);
  }, 2000);
  clearTimeout(timeoutId);

  const handleMount = async () => {
    const id = searchParams.get('id');
    try {
      const response = await axios.get(`http://localhost:5000/api/tasks/${id}`);
      const t = response.data;
      setTask(t.task);
    } catch (err) { 
      console.log(err.message);
    }
  }

  useEffect(() => {
    handleMount();
  }, []);

  const handleTaskChange = (e) => {
    setTask({
      ...task, 
      name: e.target.value, 
    });
  }

  const handleCompleteChange = (e) => {
    setTask({
      ...task, 
      completed: e.target.checked ? true : false, 
    });
  }
  

  const handleEdit = async (e) => {
    
    e.preventDefault();
    
    try {
      await axios.patch(`http://localhost:5000/api/tasks/${task._id}`, {
        name: task.name, 
        completed: task.completed
      });
      setClicked(true);
      
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
    {
      task !== null ? 
      <div className="w-full flex flex-col items-center flex-wrap">
      
      <div className='px-8 py-8 bg-white mt-20 max-sm:mx-0 max-sm:w-72 '>
        <h1 className="font-bold text-2xl text-center">Edit Task</h1>
        <form onSubmit={handleEdit} className="flex flex-col gap-6 text-lg max-sm:text-sm mt-6">
          <div className="form-control">
            <label>Task ID:</label>
            <p>{task._id}</p>
          </div>

          <div className="form-control">
            <label htmlFor="task">Task</label>
            <input 
            value={task.name} 
            name="name" type="text" 
            onChange={handleTaskChange}
            className="max-sm:w-28 rounded-sm px-2 py-1 outline-blue-500 bg-[#e6e2e2e0]"/>
          </div>

          <div className="form-control">
            <label htmlFor="completed">Completed</label>
            <input 
            name="completed" 
            type='checkbox' 
            checked={task.completed ? true : false}
            onChange={handleCompleteChange}
            />
            
          </div>
          <button className="bg-[#6353ec] hover:bg-[#5950a5] text-white px-4 py-2 rounded-sm">
            Edit
          </button>
          {
            clicked ? 
            <p className='text-xl text-center'>Edited successfully</p>
            : <></>
          }
          

        </form>
      </div>

      
      <Link to='../' className="px-8 py-1 bg-black text-white mt-8 rounded-sm">Back to Task</Link>
      
    </div>
    : <div>Loading</div>
    }
    </>
  )
}

export default Edit