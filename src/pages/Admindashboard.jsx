import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Adminpanel } from "../components/admin/Adminpanel";
import { Adminstatus } from "../components/admin/Adminstatus";
import { Sidebar } from "../components/admin/Sidebar";



function Admindashboard() {
    

    return (
        <div className="bg-gray-50 h-full">
            <div className=' p-3  '>
                    <h1 className='text-xl font-semibold'>Admin Dashboard</h1>
                    <p className='text-gray-80 '>Welcome Md Shahanwaz!</p>
                </div>

                <Adminstatus/>
            {/* <Sidebar/> */}
            <Adminpanel/>
            




            




        </div>
    )
}; export default Admindashboard