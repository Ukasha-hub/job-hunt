
// Import Swiper React components

import { Helmet } from 'react-helmet';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';






// import required modules

import { Link, useLoaderData } from 'react-router-dom';
import {  useState } from 'react';













const Home = () => {

  
    
   
   const jobs= useLoaderData()
   const [firstSixJobs, setFirstSixJobs] = useState(jobs.slice(0, 6));
  




    //console.log(country)
   
   

    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <>
               
            </>
            
             
             <div className=''>
             <h1 className=' rounded-xl p-5 mb-5 mt-5 text-4xl font-bold flex justify-center'>Your Next Tour </h1>
             </div>

             <Tabs>
    <TabList>
      <Tab>All</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <>
      <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 justify-center content-center justify-items-center p-5'>
             {
                        firstSixJobs.map(job => (
                            <div key={job._id} className="card card-compact lg:w-[30vw] w-[350px] bg-base-100  shadow-xl">
                                <figure><img className='h-[300px]' src={job.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-3xl">{job.job}</h2>
                                    <div className=" rounded-xl flex flex-col  gap-3 p-3 text-lg pl-5">
                                    <div className="flex flex-row ">
                                   
                                    <p>Salary Range: {job.salary}</p>
                                    </div>
                                    <div className="flex flex-row">
                                   
                                    <p>Job Type: {job.category}</p>
                                    </div>
                                    <div className="flex flex-row"> 
                                   
                                    <p>Application deadline: {job.deadline}</p>
                                    </div>
                                    
                                    </div>
                                    <div className="card-actions justify-end">
                                        
                                        <Link to={`/details/${job._id}`}><button className="btn btn-primary">Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
             </div>
      </>
    </TabPanel>
    <>
      <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 justify-center content-center justify-items-center p-5'>
             {
                        firstSixJobs.map(job => (

                          
                          
                            <div key={job._id} className="card card-compact lg:w-[30vw] w-[350px] bg-base-100  shadow-xl">
                                <figure><img className='h-[300px]' src={job.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-3xl">{job.job}</h2>
                                    <div className=" rounded-xl flex flex-col  gap-3 p-3 text-lg pl-5">
                                    <div className="flex flex-row ">
                                   
                                    <p>Salary Range: {job.salary}</p>
                                    </div>
                                    <div className="flex flex-row">
                                   
                                    <p>Job Type: {job.category}</p>
                                    </div>
                                    <div className="flex flex-row"> 
                                   
                                    <p>Application deadline: {job.deadline}</p>
                                    </div>
                                    
                                    </div>
                                    <div className="card-actions justify-end">
                                        
                                        <Link to={`/details/${job._id}`}><button className="btn btn-primary">Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
             </div>
      </>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>

             <div className='flex justify-end p-5'><Link to={'/allSpot'}><button className='btn btn-lg'> See All Tourist Spots</button></Link></div>

             


             

             


              <div className=''>
             <h1 className=' rounded-xl p-5 mb-5 mt-5 text-4xl font-bold flex justify-center'>Contact Us </h1>
             </div>


              <div className="p-4 flex justify-center    bg-white mx-10" style={{backgroundImage:"url('https://img.freepik.com/free-photo/vintage-pink-telephone-composition_23-2148913955.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1714348800&semt=ais')",backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                <form action="" className="font-bold h-[100%]" >
                  <div className="flex lg:flex-row flex-col lg:gap-[5%] ">
                    <div className="lg:w-[50%]">
                      <h1 className='text-black' >Name</h1>
                      <input className="mt-2 input input-bordered w-full max-w-xs" type="text" placeholder=""/>
                    </div>
                    <div className="lg:w-[50%]">  
                      <h1 className="mt-5 lg:mt-0 text-black ">Your Email</h1>
                      <input className="mt-2 input input-bordered w-full max-w-xs" type="text" placeholder=""/>
                    </div>
                  </div>  
                  <div className="flex flex-col lg:flex-row lg:gap-10">
                    <div className="lg:w-[50%]">
                      <h1 className="mt-5 lg:mt-10 text-black">Subject</h1>
                      <input className="mt-2 input input-bordered w-full max-w-xs" type="text" placeholder="e"/>
                    </div>
                    <div className="lg:w-[50%]">  
                      <h1 className="mt-5 lg:mt-10 text-black">Phone Number</h1>
                      <input className="mt-2 input input-bordered w-full max-w-xs" type="text" placeholder="" />
                    </div>
                  </div>  
                  
                    <h1 className="mt-5 text-black">Message</h1>
                    <textarea className="w-[100%] h-40 mt-2 textarea textarea-bordered" type="text" placeholder=""></textarea>
                    <button className="btn bg-blue-500 text-white px-[30px] py-[15px] w-[100%] mt-5">Send Messege</button>
                  </form>
                  
                </div>


                <div className=" mt-5 mx-10 rounded-lg text-center bg-white text-black items-center pb-20" >
                  <div className='flex flex-row justify-center'>
                  <div className='w-[100px] ml-[10px]  '>
                  
                  </div>
                  </div>
                  
              
            </div>
             

            
              
        </div>
    );
};

export default Home;