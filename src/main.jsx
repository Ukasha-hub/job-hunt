import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

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




import PrivateRoute from './PrivateRoute.jsx';

import Home from './Home.jsx';

import ErrorPage from './ErrorPage.jsx';
import AddJob from './AddJob.jsx';
import AllJobs from './AllJobs.jsx';
import JobDetails from './JobDetails.jsx';
import AppliedJobs from './AppliedJobs.jsx';
import UserJob from './UserJob.jsx';
import UpdateJob from './UpdateJob.jsx';
import UpdateProfile from './UpdateProfile.jsx';
import Blog from './Blog.jsx';

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
        
      },
      {
        path: '/userJob/:email',
        element: <PrivateRoute><UserJob></UserJob></PrivateRoute>,
        
      },
      {
        path:'/userJob/updateJob/:id',
        element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
        
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path:'/applied/:email',
        element:<PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>,
        
      },
      {
        path:'/updateProfile',
        element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
        
      },
      {
        path:'/Blog',
        element:<Blog></Blog>,
        
      },

      
    ]
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </QueryClientProvider>
    
   
  </React.StrictMode>,
)
