import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

// import { IoHomeOutline, IoLogOutOutline ,IoProfileOutline} from "react-icons/io5";


// import { UserNavbar } from 'User'

const AdminNavbar = () => {
 
 const [open, setOpen] = useState(false);
    // function opens(){
    //     setOpen(!false)
    // }
    function toggle(){
     setOpen(!open)
    }


  return (
    <>
       <div className='bg-indigo-950 px-1 items-center justify-between    flex  h-10  shadow-md '>
                <div className=' text-white text-xs sm:text-sm sm:text-center  md:text-md lg:text-xl text-center'>Complaint Management System </div>
                <ul className=' md:flex hidden gap-4 justify-between  '>
                    <li className='hover:text-shadow-md text-white '>Home</li>
                    <li className='hover:text-shadow-md text-white'> About</li>
                    <li className='hover:text-shadow-md text-white'> Contact</li>
                    <li className='hover:text-shadow-md text-white'> Logout</li>

                   
                </ul>
                 <div className='cursor-pointer md:hidden'  >{open ? ( <IoCloseOutline className='size-6 text-white' onClick={toggle}/>):(<  IoIosMenu  className='size-8 text-white' onClick={toggle}/>)}</div>

            </div >
           
          <div className='  absolute  flex justify-end inset-0  z-50   top-9 right-0'>

             {
            open?( <ul className=' rounded w-1/3 max-w-sx h-screen   space-y-6 pl-2 flex flex-col  bg-white md:hidden   mr-1'>
                <li className='hover:text-shadow-md cursor-pointer text-gray-700 '>Home</li>
                <li className='hover:text-shadow-md text-gray-700 cursor-pointer'> About</li>
                <li className='hover:text-shadow-md text-gray-700 cursor-pointer'> Contact</li>
                <li className=' mt-auto pb-1 text-gray-700 hover:text-shadow-md cursor-pointer'> Logout</li>
                {/* <IoIosMenu />
                    <IoCloseOutline /> */}
            </ul>):null
           }
          </div>

      


    </>
  )
};
export { AdminNavbar }