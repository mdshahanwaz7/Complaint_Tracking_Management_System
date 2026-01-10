import { Outlet } from "react-router-dom"
import { AdminNavbar } from "../components/adminheader";
import { Sidebar } from "../components/admin/Sidebar";


function AdminLayout(){
// console.log("USER LAYOUT RENDERED");


    return (
       <div className=" flex min-h-screen bg-gray-100 ">
         <aside className="  bg-indigo-900 text-white">
    <Sidebar />
  </aside>
      
       <div>
        <div>
        <header className="sticky top-0 z-50">
         <AdminNavbar />
       </header>
       </div>
      
      <div>
        <main className="h-[calc(100vh-40px)] overflow-y-auto  ">
        <Outlet />
      </main>
      </div>
       </div>
    </div>
    )
};
 export default AdminLayout
