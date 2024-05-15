import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext, useState } from "react";
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";



const Register = () => {
           const {createUser} = useContext(AuthContext)

           const [seePass, setSeePass]= useState(false)

           const navigate= useNavigate()
     
           const handleRegister= e=>{
            e.preventDefault();
            const form= new FormData(e.currentTarget);
            const email= form.get('email')
            const username= form.get('username')
            const password= form.get('password')
            const photo= form.get('photo')
            //console.log(email, username, password, photo)


            if(password.length<6){
                toast.error("password should be atleast 6 characters long");
                return
            }
            if(!/[A-Z]/.test(password)){
                toast.error("password should have atleast 1 uppercase letter");
                return
            }
            if(!/[a-z]/.test(password)){
                toast.error("password should have atleast 1 lowercase letter");
                return
            }
    
             createUser(email,password)
             .then(result=>{
               // console.log(result.user)
                

                updateProfile(result.user,{
                    displayName: username,
                    photoURL: photo
                })
                .then(()=>{
                    window.location.reload();
                })
                .catch()

                Swal.fire({
                    title: " Successful!",
                    text: "You have logged in!",
                    icon: "success"
                  });
                
                navigate(location?.state? location.state: '/')
             })
             .catch(error=>{
                console.error(error)
                toast.error('Email already in use');
             })
            }

    return (
        
        <div>
            <Helmet><title>Register</title></Helmet>
            

       <div className="flex lg:flex-row flex-col justify-center mb-5" >
       <div className="lg:w-[40%] w-full flex flex-col gap-5 border-2 p-20 bg-slate-300/75 lg:rounded-full md:rounded-full" style={{backgroundImage:"url('https://static.vecteezy.com/system/resources/previews/006/891/146/non_2x/abstract-gradient-background-light-spring-color-perfect-for-design-wallpaper-promotion-presentation-website-banner-etc-illustration-background-vector.jpg')",backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
       <h1 className="flex justify-center font-bold text-3xl text-black">Join our club now</h1>
            <form onSubmit={handleRegister}>
            <div className="flex flex-col gap-5">
            <label className="input input-bordered flex items-center gap-2 ">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="email" required name="email" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <input type="text" name="photo" className="grow" placeholder="Photo Url" />
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-4 h-4 opacity-70 absolute"><path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input type="text" required name="username" className="grow" placeholder="Username" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type={seePass?"text":"password"} required name="password" className="grow" placeholder="password" /><span onClick={()=>setSeePass(!seePass)}>{seePass?<FaEyeSlash />:<FaEye />}</span>
        </label>
            </div>
        <div className="flex justify-center"><button className="btn mt-4 ">Register</button></div>    
        
            </form>


        <div className="flex justify-center text-black"><p>Already have an account? Then <a className="text-blue-700 underline font-bold"><Link to='/signIn'>Sign In</Link></a></p></div>
        
        </div>
        
       </div>
        <ToastContainer />   
        </div>
    );
};

export default Register;