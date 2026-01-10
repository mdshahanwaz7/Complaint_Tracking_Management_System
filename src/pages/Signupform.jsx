import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signupform = () => {
  const [form, setform] = useState({ name: "", email: "", password: "", })

  const navigate = useNavigate()

  const handlelogics = async (e) => {
    e.preventDefault();
    const Api_url=import.
meta.env.VITE_API_URL
    try {
      const res = await fetch(`${Api_url}/api/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json(); // ✅ INSIDE async

      if (res.ok) {
        alert("Signup successful, please login");

        navigate("/");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      alert("Server error");
      console.error(error);
    }
  };


  return (

    <form action="" onSubmit={handlelogics}>

      <div className='min-h-screen flex items-center justify-center bg-gray-100'>

        <div className='bg-white w-[380px] p-8 rounded-xl shadow-xl '>
          <h2 className='text-xl    font-bold text-center mb-3.5'>Complaint Management system</h2> <hr className='my-4 h-px bg-gray-200 border-slate-500' />
          <h2 className='text-xl font-bold text-center mb-6'>Signup</h2>

          <div className='relative w-full mb-6'>



            <input type="text" placeholder='' value={form.name} onChange={(e) => setform({ ...form, name: e.target.value })} id="name" className=" mb-4 cursor-pointer peer w-full px-3 py-2 border border-slate-900 rounded-md focus:outline-non focus:border-slate-900   " />
            <label htmlFor="name" className="  cursor-pointer  absolute left-3 top-3 text-gray-500 bg-white px-1 
               transition-all duration-300
               peer-placeholder-shown:top-2.5
               peer-placeholder-shown:text-base
               peer-placeholder-shown:text-gray-400
               peer-focus:-top-2
               peer-focus:text-sm
               peer-focus:text-slate-900 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-500 ">Enter Name</label><br />
            <div className='relative w-full mb-6'>
              <input type="email" id="email" value={form.email} onChange={(e) => setform({ ...form, email: e.target.value })} placeholder='' className="mb-4  cursor-pointer peer w-full px-3 py-2 border border-slate-900 rounded-md focus:outline-non focus:border-slate-900" />

              <label htmlFor="email" className="absolute cursor-pointer  left-3 top-2  bg-white px-1 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:gray-400
            peer-not-placeholder-shown:-top-2
            peer-not-placeholder-shown:text-sm
            peer-not-placeholder-shown:text-gray-500
             peer-focus:-top-2 peer-focus:text-sm peer-focus:text-slate-900" >Enter Email</label>

              <div className='relative w-full mb-6'>
                <input type="password" placeholder='' value={form.password} onChange={(e) => setform({ ...form, password: e.target.value })} id="password" className="mb-4  cursor-pointer peer w-full px-3 py-2 border border-slate-900 rounded-md focus:outline-non focus:border-slate-900   " />
                <label htmlFor="password" className=" cursor-pointer  absolute left-3 top-2 text-gray-500 bg-white px-1 
               transition-all duration-300
               peer-placeholder-shown:top-2.5
               peer-placeholder-shown:text-base
               peer-placeholder-shown:text-gray-400
               peer-focus:-top-2
               peer-focus:text-sm
               peer-focus:text-slate-900 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-500 ">Enter Password</label> <br />
                <div className='flex justify-center items -center bg-slate-900 w-full rounded-md px-3 py-2 text-white '>
                  <button type='submit' >Signup</button>
                </div>
                <div className='text-slate-800 text-center'>
                  <p>Already have an acoount?
                    <span className='cursor-pointer' onClick={(() => { navigate("/") })}> Login</span>
                  </p>
                </div>


              </div>

            </div>

          </div>
        </div>

      </div>
    </form>
  )
};
export { Signupform }

// import { useNavigate } from "react-router-dom";

// export const Signupform = () => {
//   const navigate = useNavigate();

//   const handlelogics = (e) => {
//     e.preventDefault();
//     console.log("Signup clicked");
//     navigate("/");
//   };

//   return (
//     <form onSubmit={handlelogics}>
//       <button type="submit">Signup</button>
//     </form>
//   );
// };
