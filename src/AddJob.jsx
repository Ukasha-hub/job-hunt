import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from 'sweetalert2'

const AddJob = () => {
    const {user}= useContext(AuthContext)

    

    const [currentTime, setCurrentTime]= useState(new Date())
    useEffect(()=>{
        var displayCurrentDate= `${currentTime.getDate()}-${currentTime.getMonth()}-${currentTime.getFullYear()}`
        setCurrentTime(displayCurrentDate)
    },[])




    const handleAddJob= e=>{
        e.preventDefault()
        const form= e.target
        const photo= form.photo.value;
        const job= form.job.value;
        const category= form.category.value;
        const salary= form.salary.value;
        const description= form.description.value;
        const post= form.post.value;
        const deadline= form.deadline.value;
        const applicant= parseInt(form.applicant.value);
        
        const email= form.email.value;
        const name= form.name.value;
        const newJob= {photo, job, category, salary, description, post, deadline, applicant,  email, name}
        //send data to mongodb

        fetch('http://localhost:5000/jobs',{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })

        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
              Swal.fire({
                title: " Successful!",
                text: "You have added a job",
                icon: "success"
              });
              e.target.reset();
            }
            else {
              Swal.fire({
                  title: "Error!",
                  text: "Failed to add job!",
                  icon: "error"
              });
          }
            
            
        })
        .catch(error => {
          console.error('Error add tourist spot:', error);
          Swal.fire({
              title: "Error!",
              text: "Failed to add job!",
              icon: "error"
          });
      });
       
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Add a new Job</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-lg  shadow-2xl bg-slate-700/50">
      <form onSubmit={handleAddJob} className="card-body ">
        <div className="flex  flex-col">
          <div className="form-control  ">
          <label className="label">
            <span className="label-text-bold">PhotoURL</span>
          </label>
          <input type="text" name='photo' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text-bold">Job Title</span>
          </label>
          <input type="text" name='job' placeholder="" className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text-bold">Job Category</span>
          </label>
          
          <select className="select select-bordered w-full max-w-xs" name='category' required>
            
            <option value='Onsite'>Onsite</option>
            <option value='Remote'>Remote</option>
            <option value='Part-Time'>Part-time</option>
            <option value='Hybrid'>Hybrid</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text-bold">Salary Range</span>
          </label>
          <input type="text" name='salary' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text-bold">Short Description</span>
          </label>
          <textarea type="text" name='description' placeholder="" className="input input-bordered h-[200px]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text-bold">Job posting date</span>
          </label>
          <input type="text" name='post' placeholder="" value={currentTime} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text-bold">Application Deadline</span>
          </label>
          <input type="date" name='deadline' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          
          <input type="hidden" name='applicant' placeholder="" value='0' className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          
          <input type="hidden" name='email' value={user.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          
          <input type="hidden" name='name' value={user.displayName} className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </div>
 
</div>
    );
};

export default AddJob;