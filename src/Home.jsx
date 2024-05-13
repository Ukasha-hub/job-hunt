
// Import Swiper React components

import { Helmet } from 'react-helmet';






// import required modules

import { Link, useLoaderData } from 'react-router-dom';
import {  useState } from 'react';

import { ImPriceTag } from "react-icons/im";
import { FaUserGroup } from "react-icons/fa6";
import { FaPlaneCircleCheck } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa";











const Home = () => {

  
    
   
   const spots= useLoaderData()
   const [firstSixSpots, setFirstSixSpots] = useState(spots.slice(0, 6));
   console.log(setFirstSixSpots)




    //console.log(country)
   
   

    return (
        <div>
            <Helmet><title>Home</title></Helmet>
            <>
               
            </>
             
             <div className='border-b-2'>
             <h1 className=' rounded-xl p-5 mb-5 mt-5 text-4xl font-bold flex justify-center'>Your Next Tour </h1>
             </div>

             <div className='flex justify-end p-5'><Link to={'/allSpot'}><button className='btn btn-lg'> See All Tourist Spots</button></Link></div>

             <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 justify-center content-center justify-items-center p-5'>
             {
                        firstSixSpots.map(spot => (
                            <div key={spot._id} className="card card-compact lg:w-[30vw] w-[350px] bg-base-100 border-2 shadow-xl">
                                <figure><img className='h-[300px]' src={spot.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-3xl">{spot.spot}</h2>
                                    <div className="border-2 rounded-xl flex flex-col justify-center content-center justify-items-center items-center gap-3 p-3 text-lg">
                                    <div className="flex flex-row">
                                    <ImPriceTag />
                                    <p>Average Cost: {spot.cost}</p>
                                    </div>
                                    <div className="flex flex-row">
                                    <FaUserGroup />
                                    <p>Total Visitors/Year: {spot.visitor}</p>
                                    </div>
                                    <div className="flex flex-row"> 
                                    <FaPlaneCircleCheck />
                                    <p>Travel Time: {spot.time}</p>
                                    </div>
                                    <div className="flex flex-row">
                                    <FaCloudSun />
                                    <p>Seasonality: {spot.seasonality}</p>
                                    </div>
                                    </div>
                                    <div className="card-actions justify-center">
                                        
                                        <Link to={`/details/${spot._id}`}><button className="btn btn-primary">Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
             </div>


             <div className='border-b-2'>
             <h1 className=' rounded-xl p-5 mb-5 mt-5 text-4xl font-bold flex justify-center' >
              Lets Go to 
              <span style={{fontWeight: 'bold', color:'green', marginLeft: '10px'}}>
                
              </span>
              <span style={{color:'red'}}>
                
              </span>
              </h1>
             </div>

             


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
                  
              <h1 className="text-2xl lg:text-5xl font-extrabold mb-20">Our Sponsors</h1>
              <ul className="flex justify-evenly gap-10 mt-5">
                <li className='w-[200px]'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrlc-WJdVubK0pMdeXEjynDZym27ZIwT4NTTo3L3yHg&s" alt="" /></li>
                <li className='w-[200px]'><img src="https://i.pinimg.com/736x/fc/04/c9/fc04c9b11b17b9a7ce2714428fce770e.jpg" alt="" /></li>
                <li className='w-[200px]'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvASCGDW013BP734YvdrC5IglsD0AdYu9q8WECi108&s" alt="" /></li>
               
              </ul>
            </div>
             

            
              
        </div>
    );
};

export default Home;