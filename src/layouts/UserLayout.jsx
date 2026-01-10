import { Outlet } from "react-router-dom"
import { UserNavbar } from "../components/userNavbar";


function UserLayout(){
// console.log("USER LAYOUT RENDERED");


    return (
       <div className=" h-screen overflow-hidden">
      
       <header className="sticky top-0 z-50">
         <UserNavbar />
       </header>
      
      <main className="h-[calc(100vh-40px)] overflow-y-auto  ">
        <Outlet />
      </main>
    </div>
    )
};
 export default UserLayout