import { RiSettings3Line } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { IoHomeSharp } from "react-icons/io5";
import React, { useState } from 'react'
import { LuChartColumnDecreasing } from "react-icons/lu";
import { useNavigate } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";

export const Sidebar = () => {


const navigate=useNavigate()

    return (
        <div>
           <aside className=" h-screen bg-indigo-950 opacity-90 text-white  flex flex-col justify-between items-center cursor-pointer  px-1 md:w-[50px]  lg:px-8  py-1   ">
  <ul className=" flex flex-col gap-9 py-2 ">
    <li className=" md:hover:bg-white md:hover:text-indigo-900 md:hover:py-1 rounded md:px-3 ">
      <IoHomeSharp />

    </li>
    <li className="whitespace-nowr md:hover:bg-white md:hover:text-indigo-900 md:hover:py-1 rounded md:px-3">
      <FaRegUserCircle />
    </li>
    <li className="whitespace-nowra md:hover:bg-white md:hover:text-indigo-900 md:hover:py-1 rounded md:px-3 ">
      <RiSettings3Line />
    </li>
    <li className=" md:hover:bg-white md:hover:text-indigo-900 md:hover:py-1 rounded md:px-3  ">
       <LuChartColumnDecreasing />
    </li>
    
  </ul>
  
  <div className="  rounded mb-10 md:hover:bg-white md:hover:text-indigo-900 md:hover:py-  md:px-4 ">
    <div className="  ">
    <button onClick={()=>{navigate('/')}} className='  '>
      <AiOutlineLogout className="" /></button> </div>

  </div>
</aside>
        </div>
    )
}
