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
           <aside className=" h-screen bg-indigo-950 opacity-90 text-white  flex flex-col justify-between    px-2 py-1   ">
  <ul className=" flex flex-col gap-4 py-2 ">
    <li className="  ">
      <IoHomeSharp />

    </li>
    <li className="whitespace-nowr">
      <FaRegUserCircle />
    </li>
    <li className="whitespace-nowra ">
      <RiSettings3Line />
    </li>
    <li className="  ">
       <LuChartColumnDecreasing />
    </li>
    
  </ul>
  <button>
    
  </button>
  <div className="  rounded mb-5 ">
    <div><AiOutlineLogout className="" />
    <button onClick={()=>{navigate('/')}} className='  '></button> </div>

  </div>
</aside>
        </div>
    )
}
