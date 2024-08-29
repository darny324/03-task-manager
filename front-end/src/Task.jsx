import completedIcon from './assets/completed_icon.png'
import editIcon from './assets/edit_icon.png'
import deleteIcon from './assets/delete_icon.png'
import { Link } from 'react-router-dom'

const Task = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="
      mt-36 px-8 py-8 shadow-lg rounded-lg flex flex-col
      w-[580px] max-lg:w-[450px] max-md:w-[350px] max-sm:w-[300px]
      bg-white gap-8
      ">
        <h1 className="text-center text-xl font-bold">Task Manager</h1>
        <form className='flex-1 flex flex-wrap max-md:flex-col'>
          <input placeholder='e.g., wash dishes' className="
          bg-[#c7c1c154] flex-1
           rounded-sm px-3 py-2 outline-none" />
          <button className="
          px-8 py-2 bg-[#60e681] hover:bg-[#60e681e1] ml-2 max-md:ml-0 max-md:mt-2
          ">Submit</button>
        </form>
      </div>
      <ul className='
      w-[580px] max-lg:w-[450px] max-md:w-[350px] max-sm:w-[300px] mt-7
      '>
        <li className='w-full py-4 rounded-sm flex px-4 items-center shadow-lg bg-white mt-3'>
          <img src={completedIcon} className='w-5 h-5 mr-4' />
          <p className='flex-1'>Do homework</p>
          
          <Link to='/edit'><img src={editIcon} width={20} height={20} /></Link>
          <button className='mx-4'><img src={deleteIcon} width={16} height={16} /></button>
        </li>

        
      </ul>
    </div>
  )
}

export default Task