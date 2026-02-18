import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { FaMessage } from "react-icons/fa6";


import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
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
       <div className='bg-indigo-950 px-3 items-center justify-between    flex  h-10  shadow-md '>
                <div className=' text-white text-xs sm:text-sm sm:text-center  md:text-xl lg:text-xl text-center'>Complaint Management System </div>
                <ul className=' md:flex hidden gap-4 justify-between  '>
                    {/* <li className='hover:text-shadow-md text-white '>Home</li>
                    <li className='hover:text-shadow-md text-white'> About</li>
                    <li className='hover:text-shadow-md text-white'> Contact</li>
                    <li className='hover:text-shadow-md text-white'> Logout</li> */}
                   <li className='flex '>
                    
                    <input type="text" className='rounded-full border-white  border focus:outline-none focus:border-indigo-700 ' />
                    <CiSearch className='text-white right-7 top-1/9 relative size-5  '/>
                   </li>
                   <li className='text-white  '><IoIosNotifications className='size-6' /></li>
                   <li className='text-white pt-1'> <FaMessage /></li>

                   
                </ul>
                 <div className='cursor-pointer md:hidden'  >{open ? ( <IoCloseOutline className='size-6 text-white' onClick={toggle}/>):(<  IoIosMenu  className='size-8 text-white' onClick={toggle}/>)}</div>

            </div >
           
          <div className='  absolute  flex justify-end inset-0  z-50   top-9 right-0'>

             {
            open?( <ul className=' rounded w-1/9 max-w-sx h-screen   py-3 gap-4 items-center  flex flex-col  bg-white md:hidden   '>
                <li className='text-indigo-900  '><IoIosNotifications className='size-6' /></li>
                   <li className='text-indigo-900 pt-1'> <FaMessage /></li>

                {/* <IoIosMenu />
                    <IoCloseOutline /> */}
            </ul>):null
           }
          </div>

      


    </>
  )
};
export { AdminNavbar }