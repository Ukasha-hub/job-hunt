import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2'
import { useEffect } from "react";



const UpdateProfile = () => {
    
    const {user}= useContext(AuthContext)

    useEffect(() => {
        const userLogIn = sessionStorage.getItem('LogIn');
        if (user && !userLogIn) {
          
            sessionStorage.setItem('LogIn', true);
    
          Swal.fire({
            title: "Login Successful!",
            text: "You have signed in!",
            icon: "success"
          });
        }
      }, []);

    console.log(user)
    
    const changeUserName=e=>{
        e.preventDefault();
        const form= new FormData(e.currentTarget);
        const username= form.get('username')
        if(username==='')
        {
            toast.error("empty input wont be accepted");
            return
        }
        updateProfile(user,{
            displayName: username
        }) 
        .then(()=>{
            console.log(user)
            window.location.reload();

        })
        .catch()  

    }


    const changePhotoURL=e=>{

        e.preventDefault();
        const form= new FormData(e.currentTarget);
        const photo= form.get('photo')
        if(photo==='')
        {
            toast.error("empty input wont be accepted");
            return
        }
        updateProfile(user,{
            photoURL: photo
        }) 
        .then(()=>{
            console.log(user)
            window.location.reload();

        })
        .catch() 

    }

    return (
        <div className="flex justify-center content-center justify-items-center items-center" >
            <div className="flex flex-col justify-center content-center justify-items-center items-center w-1/2 gap-5 text-black  py-5 border rounded-3xl" style={{backgroundImage:"url('https://w0.peakpx.com/wallpaper/158/57/HD-wallpaper-light-blue-rounds-blur-background-light-blue.jpg')",backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
            <Helmet><title>Profile:{user.displayName}</title></Helmet>
            <h1 className="text-4xl font-bold ">Hello, {user.displayName}</h1>
            <div className="avatar">
                <div className="w-[200px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                    <img src={user.photoURL}/>
                </div>
                </div>
            
            <h1 className="text-2xl font-semibold">{user.email}</h1>
           
            

            <form onSubmit={changeUserName} >
                <label className="font-semibold">User Name:</label>
                <div className="flex flex-row space=x-2 w-full">
                <input type="text" placeholder="User Name" name="username" defaultValue={user.displayName} className="input bg-white input-bordered  max-w-sm" />
                <button  className="btn btn-md">Change</button>
                </div>
            </form> 
            <form onSubmit={changePhotoURL}>   
                <label className="font-semibold">Image URL:</label>
                <div className="flex flex-row">
                <input type="text" placeholder="URL" name="photo" defaultValue={user.photoURL}  className="input bg-white input-bordered w-full max-w-xs" />
                <button className="btn ">Change</button>
                </div>
            </form>
            <ToastContainer />      
        </div>
        </div>
    );
};

export default UpdateProfile;