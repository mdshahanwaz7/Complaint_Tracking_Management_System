import { Outlet } from "react-router-dom"
import { AdminNavbar } from "../components/adminheader";
import { Sidebar } from "../components/admin/Sidebar";


function AdminLayout() {
  // console.log("USER LAYOUT RENDERED");


  return (
    


      <div className="h-screen flex flex-col overflow-hidden">

        <header className="sticky top-0 z-50">
          <AdminNavbar />
        </header>

        <div className="flex flex-1 overflow-hidden">

          {/* Sidebar (fixed, no scroll) */}
          <aside className="bg-indigo-950 text-white shrink-0 overflow-hidden">
            <Sidebar />
          </aside>

          {/* Main content (ONLY this scrolls) */}
          <main className="flex-1 overflow-y-auto bg-gray-50">
            <Outlet />
          </main>

        </div>


      </div>
  
  )
};
export default AdminLayout
