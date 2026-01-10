import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Sidebar = () => {


const navigate=useNavigate()

    return (
        <div>
           <aside className="w- bg-blue-950 opacity-90 text-white min-h-screen flex flex-col justify-between">
  <ul className=" space-y-4 ">
    <li className="whitespace-nowrap hover:bg-indigo-700 px-3  py-2 rounded">
      Admin Panel
    </li>
    <li className="whitespace-nowrap hover:bg-indigo-700 px-3 py-2 rounded">
      Dashboard
    </li>
    <li className="whitespace-nowrap hover:bg-indigo-700 px-3 py-2 rounded">
      Complaints
    </li>
    
  </ul>
  <div className=" whitespace-nowrap flex bg-white text-gray-700 text-center  mb-3 p-2 mx-3 rounded hover:m-2 shadow-md ">
    <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg></div>
    <button onClick={()=>{navigate('/')}} className=''>Logout</button>

  </div>
</aside>
        </div>
    )
}
