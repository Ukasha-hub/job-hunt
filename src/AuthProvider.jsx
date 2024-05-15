import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {createContext, useEffect, useState} from 'react';
import app from './firebase.config';
import axios from 'axios';


export const AuthContext= createContext('null')


const auth= getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true)
    

    const createUser= (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const signIn= (email, password)=>{
        setLoading(true)
        
        return signInWithEmailAndPassword(auth,email,password)
    }


    const logOut=()=>{
        setLoading(true)
        
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            console.log('user auth changed', currentUser)
            
            const userEmail= currentUser?.email || (user? user.email : null)
            console.log(userEmail)
            const loggedUser={email: userEmail}
            setUser(currentUser)
            setLoading(false)
            //if user exists then issue token
            if(currentUser){
                
                axios.post('https://job-hunt-server-bice.vercel.app/jwt', loggedUser, {withCredentials: true})
                .then(res=>{
                    console.log('token response ', res.data)
                })
            }
            else{
                 axios.post('https://job-hunt-server-bice.vercel.app/logout', loggedUser, {
                    withCredentials:true
                 })
                 .then(res=>{
                    console.log(res.data)
                 })
            }
            
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const AuthInfo={user, loading, setLoading, createUser, logOut, signIn}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;