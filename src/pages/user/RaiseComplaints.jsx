import React from 'react'
import { useState, useEffect } from 'react';

import { PiWarningCircleLight } from "react-icons/pi";
// import { Navigate } from 'react-router'
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const RaiseComplaints = () => {

  const navigate = useNavigate()
  const [complain, setcomplain] = useState({
    name: "", category: "", description: "", address: "", district: "", pincode: ""
  })



  // const{name,email,mobile,title,description}=req.body
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("TOKEN BEFORE POST:", localStorage.getItem("token"));

    const Api_url=import.meta.env.VITE_API_URL



    try {
      const res = await fetch(`${Api_url}/api/complaint`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(complain),

      });
    //  console.log(data)

      const data = await res.json();  // ✅ INSIDE async
      console.log(data)
      if (res.ok) {
        alert("complaint submitted");

        navigate("/user/dashboard");

      } else {
        alert(data.message || "Not submitted");
      }
    } catch (error) {
      alert("Server error");
      console.error(error);
    }

  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    setcomplain((prev) => ({
      ...prev,
      [name]: value,
    }));
  };







return (
  <div className='flex bg-gray-50 justify-center  '>
    <div className='bg-white  rounded-xl shadow-md w-full mx-4 px-8  py-9 my-8'>
      <div className='font-bold text-3xl pt-'>New Complaint</div>

      <form action="" className='flex flex-col gap-4 mt-6  ' onSubmit={handlesubmit}>
        <div className=''>
          <div>

            <input className="border-gray-400 border  focus:outline-none p-3 mb-4 w-full rounded-md focus:ring-2 focus:ring-blue-950   " placeholder='Enter Name' name="name"
              value={complain.name} onChange={handleChange} />
          </div>

          <select className='w-full  border border-gray-400 p-3 mb-4 rounded-md focus:ring-2 focus:ring-blue-950' placeholder='Description ' onChange={handleChange}
            value={complain.category} name="category" id="Category">
            <option value=""  > Select Category</option>
            <option value="water"> Water Supply</option>
            <option value="street">Street Lighting</option>
            <option value="sanitation">Sanitation</option>
            <option value="drainage">Drainage</option>
            <option value="garbage">Garbage Collection</option>
          </select>

        </div>
        <div>

          <textarea name="description"
            value={complain.description} id="" className=' p-2 border  rounded border-gray-400  w-full mb-7 min-h-[120px] focus:outline-none resize-none rounded-md focus:ring-2 focus:ring-blue-950' placeholder='Description ' onChange={handleChange}     ></textarea>
        </div>
        <div>

          <input className=" focus:outline-none rounded-md focus:ring-2 focus:ring-blue-950 border p-3 mb-4 w-full border-gray-400" placeholder='Address' name="address"
            value={complain.address} onChange={handleChange} />
        </div>
        <div>

          <input className="  focus:outline-none rounded-md focus:ring-2 focus:ring-blue-950 border p-3  mb-4 w-full border-gray-400" placeholder='District' name="district"
            value={complain.district} onChange={handleChange} />
        </div>
        <div>

          <input className="  focus:outline-none border p-3 mb-4 w-full rounded-md focus:ring-2 focus:ring-blue-900 border-gray-400 " placeholder='Pin Code' name="pincode"
            value={complain.pincode} onChange={handleChange} />
        </div>
        <div className='bg-gray-200 flex  rounded-md gap-3 p-4'>
          <div className='pt-1'><PiWarningCircleLight /></div>
          <p>
            Your complaint will be assigend to the relevant department and you will recieve updates via SMS and app notifications.
          </p>
        </div>



        <div className=' bg-indigo-950 opacity-90 rounded-2xl p-4 text-white text-center font-semibold text-3xl '>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  </div>
)
}

