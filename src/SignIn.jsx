import { useContext } from "react";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import {  GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import app from "./firebase.config";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { FaGoogle } from "react-icons/fa";

import Swal from "sweetalert2";




const SignIn = () => {
   const auth = getAuth(app)
   const {signIn}= useContext(AuthContext)
   const location= useLocation()
   const navigate= useNavigate()
   const googleProvider= new GoogleAuthProvider()
   

   const [seePass, setSeePass]= useState(false)

   const handleGoogleSignIn=()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            const user=result.user
            console.log(user)
            
            
              setTimeout(navigate(location?.state? location.state: '/'), 3000)  
            
            
        })
        .catch(error=>{
            console.log(error, error.message)
            toast.error(error.message);
        })
   }

  

    const handleLogin= e=>{
        e.preventDefault();
        const form= new FormData(e.currentTarget);
        const email= form.get('email')
        const password= form.get('password')
        signIn(email,password)
        .then(result=>{
            console.log(result.user)
            Swal.fire({
                title: " Successful!",
                text: "You have logged in!",
                icon: "success"
              });
            
         navigate(location?.state? location.state: '/')
            
        })
        .catch(error=>{
            console.error(error)
            toast.error("Email or password is incorrect");
        })


    }
    return (
        <div className="" >
             <Helmet><title>Sign In</title></Helmet>
           <div className="flex-flex-row" >
           <div className="bg-slate-700/75 flex flex-col  gap-5 mb-5 py-10 lg:mx-[20vw]  border-y-2">
            <h1 className="flex justify-center font-bold text-5xl ">Welcome Back</h1>
             <p className="flex justify-center text text-gray-400 ">Enter to get unlimited access to data and information</p>
            <div className="flex justify-center">
            <div className=" lg:w-[40%] w-full">
            
            <form onSubmit={handleLogin} >
             <div className="flex-flex-col gap-3">
             <label className="input input-bordered flex items-center gap-2 mb-5">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                 <input type="email" required name="email" className="grow" placeholder="Email" />
             </label>

                 <label className="input input-bordered flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                 <input type={seePass?"text":"password"} required name="password" className="grow" placeholder="password" /><span onClick={()=>setSeePass(!seePass)}>{seePass?<FaEyeSlash />:<FaEye />}</span>
             </label>
             <div className="flex justify-center"><button className="btn  mt-5 text-black bg-gray-400 ">Login</button></div>
             </div>
             <div className="divider text-white">Or, Sign in with:</div>
             <div className="flex flex-col gap-2 justify-center items-center content-center">
             <button className="btn btn-wide bg-gray-400 text-black" onClick={handleGoogleSignIn}><span><FaGoogle /></span>SignIn with Google</button>
            
             </div>
            </form>


         <p className="mt-5 flex text-white justify-center font-bold text-xl">Dont have an account? Then <a className="text-blue-400 underline"><Link to='/register'> Register</Link></a></p>
         
         </div>
            </div>
            </div>
            <div></div>
           </div>
            <ToastContainer />      
        </div>
    );
};

export default SignIn;