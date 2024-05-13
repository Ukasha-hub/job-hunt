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



import UpdateTouristSpot from './UpdateTouristSpot.jsx';
import PrivateRoute from './PrivateRoute.jsx';

import Home from './Home.jsx';

import ErrorPage from './ErrorPage.jsx';
import AddJob from './AddJob.jsx';
import AllJobs from './AllJobs.jsx';
import JobDetails from './JobDetails.jsx';
import AppliedJobs from './AppliedJobs.jsx';
import UserJob from './UserJob.jsx';

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
        path: '/userJob/:email',
        element: <PrivateRoute><UserJob></UserJob></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/jobs/email/${params.email}`)
      },
      {
        path:'/userSpot/updateSpot/:id',
        element: <PrivateRoute><UpdateTouristSpot></UpdateTouristSpot></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path:'/applied/:email',
        element:<PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/applied/${params.email}`)
      },

      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
   
  </React.StrictMode>,
)
