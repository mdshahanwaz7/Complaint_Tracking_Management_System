import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { CiCircleCheck } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineMoving } from "react-icons/md";


function Complaintssummary() {



    const [summary, setsummary] = useState({
        total: 0,
        inProgress: 0,
        resolved: 0,
    })

    const get = async () => {
        const token = localStorage.getItem("token")
        console.log(token)
        if (!token) {
            console.log("no token founded ")
            return;
        }

      const Api_url=import.meta.env.VITE_API_URL

       

        const res = await fetch(`${Api_url}/api/complaint/summary`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },

        })
        //  console.log(res.token)

        const data = await res.json()
        console.log(data)
        setsummary(data)
        console.log('user total',data)
    }
    useEffect(() => {
        get()
    }, [])



    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    const getname = async () => {
        const Api_url=import.meta.env.VITE_API_URL
        try {
            const res = await fetch(`${Api_url}/api/user/welcome`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            const data = await res.json();

            // ✅ console

            // 🔥 THIS IS THE MOST IMPORTANT LINE
            setUser(data.name);

        } catch (error) {
            console.error("Error:", error);

        }
    };

    useEffect(() => {
        getname();
    }, []);

    if (!user) return null;

    const avatarLetter = user.name.charAt(0).toUpperCase();



    return (
        <div className='bg-gray-50 h-screen '>
            <div className='flex  mx-4 pt-7 '>

                <div className="w-14 p-5 h-14 rounded-full bg-indigo-900 text-white flex items-center 
                  justify-center                   text-slate-700 text-xl font-bold shadow-2xl hover:shadow-md ">
                    {avatarLetter}

                </div>
                <div className='ml-4'>
                    <h1 className='font-semibold text-xl mb-2 '>Dashboard</h1>
                    <p className=' opacity-85 '>Welcome {user.name}!</p>
                    <p className=" opacity-80">Track and Manage your  Complaint Efficiently</p>

                </div>
            </div>
            <div>
                <div className='flex flex-col gap-2 mt-12'>
                    <div className='bg-white py-8 px-3 mb-2 mx-4 rounded-xl opacity-80  flex  space-x-2 shadow-md  '><MdOutlineMoving  className='text-2xl text-indigo-800'/>
                    <div>Total   <span className='font-bold  '>{summary.total}</span></div>
                    
                    </div>
                    <div className='mb-2 bg-white py-8 px-3 mx-4 rounded-xl opacity-80  shadow-md flex space-x-2     '>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"  className='text-amber-600' fill="currentColor"><path d="M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120Zm160-360q66 0 113-47t47-113v-120H320v120q0 66 47 113t113 47ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Zm320-80Zm0-640Z"/></svg>
                        
                        <div>
                            InProgress <span className='font-bold'> {summary.inProgress}</span>
                        </div>
                        
                         </div>
                    <div className=' bg-white py-8 px-3 mx-4 rounded-xl opacity-80 mb-3 shadow-md   '><FaCircleCheck  className='text-emerald-700 text-xl inline-block ' /> Resolved <span className='font-bold'>{summary.resolved}</span>

                    </div>
                    <div className='bg-blue-950 text-white py-2 mt-8 px-3 mx-4 rounded-xl opacity-80 mb-14 cursor-pointer shadow-md text-center text-center ' onClick={()=>{navigate("/user/dashboard/complaint")}}><span className='text-2xl'>+</span>New Complaint</div>
                </div>
            </div>




        </div>
    )
}; export { Complaintssummary }
