import React from 'react'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
// import { update } from '../../api/Updateapi'
import { updateComplaintStatus } from '../../api/Updateapi'

export const Adminpanel = () => {

  const [complain, setcomplain] = useState([])
  const [view, setview] = useState(null)
  const [loading, setLoading] = useState(true);
  const [open, setopen] = useState(false)


  const fetchcomplaints = async (e) => {
    // e.preventDefault()
    try {
      const res = await fetch("http://localhost:2000/api/admin/complaint/summary", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });


      const data = await res.json()
      setcomplain(data)
      console.log(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchcomplaints()
  }, [])

  const handleview = (e) => {
    setview(e)
    setopen(true)

  }
  const handlechange = async (id, status) => {
    try {
      await updateComplaintStatus(id, status);

      // 🔥 update UI instantly
      setcomplain((prev) =>
        prev.map((c) =>
          c._id === id ? { ...c, status } : c
        )
      );
      setopen(false)
    } catch (err) {
      alert(err.message);
    }
  };



  return (
    <div >


      <div className="bg-white rounded-lg shadow overflow-x-auto w-full ">


        <div className="grid grid-cols-9 gap-4 bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-700">
          <div>Date</div>
          <div>Name</div>
          <div>Category</div>
          <div>Description</div>
          <div>Address</div>
          <div>District</div>
          <div>Pincode</div>
          <div>Status</div>
          <div className="text-center">Action</div>
        </div>


        {Array.isArray(complain) && complain.map((e) =>(
          <div
            key={e._id}
            className="grid grid-cols-9 gap-4 px-4 py-3 text-sm text-gray-800 odd:bg-gray-100 even:bg-white items-center hover:bg-gray-50"
          >
            <div>{new Date(e.createdAt).toLocaleDateString()}</div>
            <div className="font-medium">{e.name}</div>
            <div className="capitalize">{e.category}</div>


            <div className="truncate max-w-xs ">{e.description}</div>

            <div className="truncate max-w-xs">{e.address}</div>
            <div>{e.district}</div>
            <div>{e.pincode}</div>


            <div>
              <span
                className={`px-3 py-1 rounded-md text-xs font-semibold
            ${e.status === "pending"
                    ? "bg-yellow-500 text-white"
                    : e.status === "in_progress"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
              >
                {e.status}
              </span>
            </div>

            {/* Action Button */}
            <div className="text-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-xs" onClick={() => handleview(e)}>
                View
              </button>
            </div>
          </div>


))}
      </div>

      <div>
        {open ?  (
          <div className="fixed inset-1 bg-black/40 flex items-center justify-center  ">
            <div className="bg-white  rounded-lg w-[500px] shadow-md pb-3  ">
              <h2 className="text-lg mb-3 rounded px-4 shadow-md font-bold py-3 rounded-b-md ">Complaint Details</h2>
              <p className='px-4'><b>Date:</b> {new Date(view.createdAt).toLocaleDateString()}</p>

              <p className='px-4'><b>Name:</b> {view.name}</p>
              <p className='px-4'><b>Category:</b> {view.category}</p>
              <p className='px-4'>
                <b>Description: </b>
                {view.description}
              </p>
              <p className='px-4'><b>Address:</b> {view.address}</p>
              <p className='px-4'><b>District:</b> {view.district}</p>
              <p className='px-4'><b>pincode:</b> {view.pincode}</p>
              <p className='px-4 text-yellow-600 text-none text-black'><b>Status:</b> {view.status}</p>





              <div className='flex justify-between px-6 py-4'>
                <button
                  className=" bg-red-600 px-7 text-white py-2 rounded-md"
                  onClick={() => setopen(false)}
                >
                  Close
                </button>
                <button onClick={() => handlechange(view._id, "in_progress")} className=' px-7 py-2 rounded-md bg-blue-900 text-white'>InProgress</button>
                <button onClick={() => handlechange(view._id, "resolved")} className=' px-7 py-2 text-white bg-green-600 rounded-md'>Resolved</button>
              </div>
            </div>
          </div>
        ):null}
      </div>


    </div>
  )
}
