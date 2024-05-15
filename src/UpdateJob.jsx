
import { useQuery } from "@tanstack/react-query";
import {   useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateJob = () => {
    //const job= useLoaderData()

    const { id } = useParams(); 

   
   const fetchUpdateJob = async () => {
       const response = await fetch(`https://job-hunt-server-bice.vercel.app/jobs/${id}`);
       if (!response.ok) {
           throw new Error('Failed to fetch user jobs');
       }
       return response.json();
   };

   
   const { isLoading, isError, data: job } = useQuery({queryKey:['job', id], queryFn:fetchUpdateJob});

    const navigate= useNavigate()
    
   

    const handleUpdateJob= (e, id)=>{
        e.preventDefault()
        const form= e.target
        const photo= form.photo.value;
        const job= form.job.value;
        const category= form.category.value;
        const salary= form.salary.value;
        const description= form.description.value;
        
        const applicant= form.applicant.value;
        const deadline= form.deadline.value;
        
        const UpdatedJob= {photo, job, category, salary, description, deadline, applicant}
        //send data to mongodb
        //console.log('inside func:', id)
        fetch(`https://job-hunt-server-bice.vercel.app/jobs/${id}`,{
            method: "PUT",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedJob)
        })
  
        .then(res=>res.json())
        .then(data=>{
            //console.log(data);
            if(data.modifiedCount>0){
              Swal.fire({
                title: " Successful!",
                text: "You have updated a job!",
                icon: "success"
              });
              navigate(`/userJob/updateJob/${id}`)
            }
            else {
              Swal.fire({
                  title: "Error!",
                  text: "Failed to update job",
                  icon: "error"
              });
          }
            
        })
        .catch(error => {
          console.error('Error updating tourist spot:', error);
          Swal.fire({
              title: "Error!",
              text: "Failed to update job!",
              icon: "error"
          });
      });
       
    }

    if (isLoading) {
      return <span className="loading loading-spinner loading-lg text-5xl text-center flex justify-center content-center items-center justify-contents-center"></span>;
  }

  if (isError) {
      return <div>Error fetching data</div>;
  }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Add a new Job</h1>
           
          </div>
          <div className="card shrink-0 w-full max-w-lg  shadow-2xl bg-slate-700/50">
            <form onSubmit={(e)=>handleUpdateJob(e, job._id )} className="card-body ">
              <div className="flex  flex-col">
                <div className="form-control  ">
                <label className="label">
                  <span className="label-text-bold">PhotoURL</span>
                </label>
                <input type="text" name='photo' defaultValue={job.photo} placeholder="" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text-bold">Job Title</span>
                </label>
                <input type="text" name='job' defaultValue={job.job} placeholder="" className="input input-bordered" required />
              </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text-bold">Job Category</span>
                </label>
                 
                <select className="select select-bordered w-full max-w-xs" defaultValue={job.category} name='category' required>
                  
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
                <input type="text" name='salary' placeholder="" defaultValue={job.salary} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text-bold">Short Description</span>
                </label>
                <textarea type="text" name='description' placeholder="" defaultValue={job.description} className="input input-bordered h-[200px]" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text-bold">Job posting date</span>
                </label>
                <input type="text" name='post' placeholder="" value={job.post} className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text-bold">Application Deadline</span>
                </label>
                <input type="date" name='deadline' placeholder="" defaultValue={job.deadline} className="input input-bordered" required />
              </div>
              <div className="form-control">
                
                <input type="hidden" name='applicant' placeholder="" value={job.applicant} className="input input-bordered" required />
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

export default UpdateJob;