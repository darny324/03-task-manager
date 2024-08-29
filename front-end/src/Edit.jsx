import { Link } from "react-router-dom"


const Edit = () => {
  return (
    <div className="w-full flex flex-col items-center flex-wrap">
      <div className='px-8 py-8 bg-white mt-20 max-sm:mx-0 max-sm:w-72 '>
        <h1 className="font-bold text-2xl text-center">Edit Task</h1>
        <form className="flex flex-col gap-6 text-lg max-sm:text-sm mt-6">
          <div className="form-control">
            <label>Task ID:</label>
            <p>asdf1234123</p>
          </div>

          <div className="form-control">
            <label htmlFor="task">Task</label>
            <input name="task" type="text" className="max-sm:w-28 rounded-sm px-2 py-1 outline-blue-500 bg-[#e6e2e2e0]"/>
          </div>

          <div className="form-control">
            <label htmlFor="completed">Completed</label>
            <input name="completed" type='checkbox'/>
          </div>
          <button className="bg-[#6353ec] hover:bg-[#5950a5] text-white px-4 py-2 rounded-sm">
            Edit
          </button>
          

        </form>
      </div>

      
      <Link to='../' className="px-8 py-1 bg-black text-white mt-8 rounded-sm">Back to Task</Link>
      
    </div>
  )
}

export default Edit