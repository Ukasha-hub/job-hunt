import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import SignIn from './SignIn.jsx';
import AuthProvider from './AuthProvider.jsx';
import Register from './Register.jsx';


import UserTouristSpot from './UserTouristSpot.jsx';
import UpdateTouristSpot from './UpdateTouristSpot.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import SpotDetails from './SpotDetails.jsx';
import Home from './Home.jsx';

import ErrorPage from './ErrorPage.jsx';
import AddJob from './AddJob.jsx';
import AllJobs from './AllJobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=> fetch('http://localhost:5000/jobs')
      },

      {
        path: '/signIn',
        element: <SignIn></SignIn>
        
      },
      {
        path: '/register',
        element: <Register></Register>
        
      },
      {
        path: '/addSpot',
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path:'/allSpot',
        element:<AllJobs></AllJobs>,
        loader: ()=> fetch('http://localhost:5000/jobs')
      },
      {
        path: '/userSpot',
        element: <PrivateRoute><UserTouristSpot></UserTouristSpot></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/jobs')
      },
      {
        path:'/userSpot/updateSpot/:id',
        element: <PrivateRoute><UpdateTouristSpot></UpdateTouristSpot></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
      },
    

      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
   
  </React.StrictMode>,
)
