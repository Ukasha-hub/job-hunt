import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const location= useLocation()
    //console.log(location.pathname)
if(loading){
    return <span className="loading loading-spinner loading-lg text-5xl text-center flex justify-center content-center items-center justify-contents-center"></span>
}    
if(user){
    return children
}

    return <Navigate state={location.pathname} to='/signIn'></Navigate>;
};

export default PrivateRoute;