// import { useAuth } from "../../context/Authcontext";
// import { useEffect } from "react";

// export const WelcomeCard = () => {
//   const { user } = useAuth();
// console.log("AUTH USER:", user);


//   if (!user) return null;

//   const avatarLetter = user.name.charAt(0).toUpperCase();

//   const getname=async ()=>{

// const username =await fetch("http://localhost:2000/api/user/welcome", {
//   method:'GET',
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("token")}`
//   }
// })
//   const data= await username.json()
//   console.log(data.name)

//   }
//   useEffect(()=>{
//   getname()
// },[])

//   return (
//     <div className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4">
//       <h1>{user.name}</h1>
//       {/* Avatar */}
//       <div className="w-14 h-14 rounded-full bg-indigo-600 
//                       flex items-center justify-center 
//                       text-white text-xl font-bold">
//         {avatarLetter}
//       </div>

//       {/* Text */}
//       <div>
//         <h2 className="text-lg font-semibold">
//           Welcome, {user.name}
//         </h2>
//         <p className="text-sm text-gray-500">
//           Track and manage your complaints easily
//         </p>
//       </div>
// {/* <h1></h1> */}
//     </div>
//   );
// };

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomeCard = () => {
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
    <div className=" pb-6 shadow-md  bg-gray-100 mt-2">

      <div className="  flex   ">

        <div className="w-14 ml-3 my-6 h-14 rounded-full bg-indigo-900 text-white flex items-center 
                  justify-center                    text-slate-700 text-xl font-bold shadow-2xl hover:shadow-md ">
          {avatarLetter}

        </div>

        <div className=" my-5 ml-2  ">
          <h1 className=" font-bold text-xl  ">Welcome, {user.name}! </h1>
          <p className=" ">Track and Manage your  Complaint Efficiently</p>
        </div>

        {/* <p>Email: {user.email} </p> */}
      </div>
      <div className="flex justify-center rounded-md px-3 py-2 mx-5  bg-indigo-900 text-white  sm:mr-10 md:mr-25 lg:mr-40 hover:shadow-md ">
        <button className="" onClick={() =>  navigate("/user/dashboard/complaint")}>+Raise Complaint</button>
    </div>
      
      


    </div >
  );
};

export { WelcomeCard };
