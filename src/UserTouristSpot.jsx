import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

import Swal from 'sweetalert2'

const UserTouristSpot = () => {
    const spots =useLoaderData();
    const {user}= useContext(AuthContext)

    const navigate= useNavigate()

    const [loading, setLoading]=useState(true)

    useEffect(() => {
        setLoading(false);
    }, [spots]);

    const handleDelete= id=>{
      console.log(id)
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
          fetch(`https://10th-project-server.vercel.app/touristSpot/${id}`,{
            method: 'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
    
                
              });
              navigate(`/userSpot`)
            }
            else {
              Swal.fire({
                  title: "Error!",
                  text: "Failed to delete tourist spot!",
                  icon: "error"
              });
          }
          })
          .catch(error => {
            console.error('Error updating tourist spot:', error);
            Swal.fire({
                title: "Error!",
                text: "Failed to delete tourist spot!",
                icon: "error"
            });
        });
        }
      });
    }
    
    return (
      <div>
         

         <div className="">
  <table className="table table-zebra ">
    {/* head */}
    <thead className="lg:text-2xl">
      <tr>
        
        <th>Photos</th>
        <th>Tourist Spot</th>
        
        
        <th>
            Actions
        </th>
      </tr>
    </thead>
    <tbody>

   {
    !loading?(
      <>
      {
    spots.map((spot)=>(
        <>
        {
            spot.email===user.email?(
                <tr>
                
                <td><img className="w-40" src={spot.photo} alt="" /> </td>
                <td className="lg:text-lg flex flex-col">{spot.spot}, {spot.location}, {spot.country}</td>
                
                <td>
            <div className="flex flex-col gap-3">
                <Link to={`/details/${spot._id}`}><button className="btn btn-sm bg-blue-600">View Details</button></Link>
                
                <Link to={`/userSpot/updateSpot/${spot._id}`}><button className="btn btn-sm bg-green-600">Edit</button></Link>

                <Link><button onClick={()=> handleDelete(spot._id)} className="btn btn-sm bg-red-600">Delete</button></Link>
                
                
            </div>
        </td>
              </tr>
            ):(
                <p></p>
            )
        }
        </>
    ))
   }
      </>
    ):(<span className="loading loading-spinner loading-lg text-5xl text-center flex justify-center content-center items-center justify-contents-center"></span>)
   }

     
      
     
    </tbody>
  </table>
</div>
      
      </div>  
      
    );
};

export default UserTouristSpot;