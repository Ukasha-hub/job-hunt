import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
   
    const {user, logOut} =useContext(AuthContext);

    
    

     
    const handleSignOut=()=>{
            logOut()
            .then()
            .catch()
    }


    return (
        <div>
        <div className="navbar flex justify-between  bg-gray-300">
           


            <div className=" ">
                <a className="btn btn-ghost font-extrabold text-2xl text-black">EuroTrip</a>
            </div>


           



            <div className=" lg:flex space-x-4">
                

            <div className="avatar ">
              <div className="lg:w-20 w-10 mask mask-squircle">
                  {
                      user?.photoURL?
                      <div className="tooltip  tooltip-left" title={user.displayName}>
                          <img src={user.photoURL} />
                      </div>
                      
                      :
                      <div title={user?.displayName?user.displayName: "No user"}>
                          <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" /> 
                      </div>

                      
                  }
                  
              </div>
                 
              </div>
              


                
                <div className="navbar-end">

                {
                    user?
                    <button onClick={handleSignOut} className="btn">Sign Out</button>
                    :
                    <div className="flex flex-row space-x-3">
                        <button className="btn lg:btn-md btn-sm">
                        <Link to='/signIn'>Sign In</Link></button>
                        <button className="btn lg:btn-md btn-sm">
                        <Link to='/register'>Register</Link></button>
                    </div>
                }
                </div>
                
               
                
                
            </div>
        </div>
    </div>
    );
};

export default Navbar;