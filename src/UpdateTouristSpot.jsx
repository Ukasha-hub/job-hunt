import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import {  useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const UpdateTouristSpot = () => {
    const spot= useLoaderData()

    const navigate= useNavigate()
    
    const {user}= useContext(AuthContext)

    console.log(spot)
    console.log(spot._id)
    

    const handleUpdateSpot= (e, id)=>{
      e.preventDefault()
      const form= e.target
      const photo= form.photo.value;
      const spot= form.spot.value;
      const country= form.country.value;
      const location= form.location.value;
      const description= form.description.value;
      const cost= form.cost.value;
      const seasonality= form.seasonality.value;
      const time= form.time.value;
      const visitor= form.visitor.value;
      const email= form.email.value;
      const name= form.name.value;
      
      const UpdatedTouristSpot= {photo, spot, country, location, description, cost, seasonality, time, visitor, email, name}
      //send data to mongodb
      console.log('inside func:', id)
      fetch(`https://10th-project-server.vercel.app/touristSpot/${id}`,{
          method: "PUT",
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(UpdatedTouristSpot)
      })

      .then(res=>res.json())
      .then(data=>{
          console.log(data);
          if(data.modifiedCount>0){
            Swal.fire({
              title: " Successful!",
              text: "You have updated a tourist spot!",
              icon: "success"
            });
            navigate(`/userSpot/updateSpot/${id}`)
          }
          else {
            Swal.fire({
                title: "Error!",
                text: "Failed to update tourist spot!",
                icon: "error"
            });
        }
          
      })
      .catch(error => {
        console.error('Error updating tourist spot:', error);
        Swal.fire({
            title: "Error!",
            text: "Failed to update tourist spot!",
            icon: "error"
        });
    });
     
  }

    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Update of {spot.spot}</h1>
          
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-slate-700/50">
          <form onSubmit={(e)=>handleUpdateSpot(e, spot._id )} className="card-body">
            <div className="flex  flex-col">
              <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input type="text" name='photo' defaultValue={spot.photo} placeholder="photo" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tourists spot name</span>
              </label>
              <input type="text" name='spot' defaultValue={spot.spot} placeholder="spot" className="input input-bordered" required />
            </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Country Name</span>
              </label>
              <input type="text" name='country' defaultValue={spot.country} placeholder="" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input type="text" name='location' defaultValue={spot.location} placeholder="" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <textarea type="text" name='description' defaultValue={spot.description} placeholder="" className="input input-bordered h-[200px]" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Average Cost</span>
              </label>
              <input type="text" name='cost' defaultValue={spot.cost} placeholder="" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seasonality</span>
              </label>
              <input type="text" name='seasonality' defaultValue={spot.seasonality} placeholder="" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Travel Time</span>
              </label>
              <input type="text" name='time' defaultValue={spot.time} placeholder="" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Total Vistors per Year</span>
              </label>
              <input type="text" name='visitor' defaultValue={spot.visitor} placeholder="" className="input input-bordered" required />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' defaultValue={user.email} value={user.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' defaultValue={user.displayName} value={user.displayName} className="input input-bordered" required />
        </div>
           
            
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
     
    </div>
    );
};

export default UpdateTouristSpot;