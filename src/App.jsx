// import { Login } from "./pages/Login"
// import React from 'react'
import { Loginform } from "./pages/Loginform"
import { Signupform } from "./pages/Signupform"
import { } from "react-router-dom"
import { Test } from "./pages/test"
import UserLayout from './layouts/UserLayout'
import AdminLayout from "./layouts/adminLayout"
import Admindashboard from "./pages/Admindashboard"

import { Home } from './pages/user/Home'
import { Routes, Route, Navigate } from "react-router-dom"
import { RaiseComplaints } from "./pages/user/RaiseComplaints"
import { Adminpanel } from "./components/admin/Adminpanel"


function App() {

  // const navigate=useNavigate()

  const AdminRoute = ({ children }) => {
    const role = localStorage.getItem("role");
    return role === "admin" ? children : <Navigate to="/" />;
  };


  return (


    

    <Routes>
   //admin dashboard
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route index  element={<Admindashboard />} />
      </Route>


      {/* <navbar/> */}
      <Route path="/" element={<Loginform />} />
      <Route path="/Signupform" element={<Signupform />} />


      <Route path="/user/dashboard" element={<UserLayout />}>

        <Route index element={<Home />} />
        <Route path="complaint" element={<RaiseComplaints />} />

      </Route>


      
    </Routes >



  )
};

export default App

