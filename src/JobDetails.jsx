import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import { AuthContext } from "./AuthProvider";
import { ToastContainer, toast } from 'react-toastify';



const JobDetails = () => {
    const job= useLoaderData()
    console.log(job._id)
    const {user}= useContext(AuthContext)

    // Convert date string to Date object
const dateFromMongoDB = new Date(job.deadline);

// Current date
const currentDate = new Date();

    const [currentTime, setCurrentTime]= useState(new Date())
    const [updateApplicant, setupdateApplicant]= useState(job.applicant+1)
    console.log(updateApplicant)
    const navigate= useNavigate()
    useEffect(()=>{
        var displayCurrentDate= `${currentTime.getDate()}-${currentTime.getMonth()}-${currentTime.getFullYear()}`
        setCurrentTime(displayCurrentDate)
    },[])

    const [applied, setApplied]=useState(false)
   

    useEffect(() => {
        fetch(`http://localhost:5000/applied/${user.email}`)
            .then(res => res.json())
            .then(data => {
                data.map(d=>{
                    if (d.job === job.job) {
                        setApplied(true);
                        return null
                    }

                })
                 
                })
            
            
    }, []);
const handleApplyJob=(e,id)=>{
    e.preventDefault()
    const form= e.target
    const cv= form.cv.value;
    const job= form.job.value;
    //console.log(job)
    const category= form.category.value;
    
    
    const post= form.post.value;
    const photo= form.photo.value;
    const salary= form.salary.value;
        const description= form.description.value;
        const deadline= form.deadline.value;
    
    const email= form.email.value;
    const name= form.name.value;
    const applicant = parseInt(form.applicant.value)
    const applyJob= {cv, job, category,  post,  email, name}
    const updateApplicant= {photo, salary, description, deadline, job, category,applicant}

    fetch('http://localhost:5000/applied',{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(applyJob)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                toast.success("You have applied for the job")
              setApplied(true)
              navigate(`/details/${id}`)
              
              
            }
            else {
                toast.error("Failed to apply")
          }
          
            
            
        })
        .catch(error => {
          console.error('Error apply:', error);
          toast.error("Failed to apply")
      });

      fetch(`http://localhost:5000/jobs/${id}`,{
            method: "PUT",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateApplicant)
        })
}    

    return (
        <div>
        <section className="p-6  dark:text-gray-800">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5 ">
		<div className="w-full px-3 py-10 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50 ">
			
			<h1 className="text-5xl font-extrabold dark:text-gray-900">{job.job}</h1>
			<p className="my-8">
				<span className="font-medium dark:text-gray-900">Description: </span>{job.description}
			</p>
			<div  className="self-stretch  space-y-3 ">
				<div className="flex flex-row text-left">
                <div className="p-5 border-r-2 space-y-5">
                <p className="pt-2 "><span className="  font-bold ">Job Category: </span> {job.category}</p>
                <p className="pt-2 "><span className="  font-bold ">Salary Range: </span> {job.salary}</p>
                <p className="pt-2 "><span className="  font-bold ">Number of Applicants: </span> {job.applicant}</p>
					
				</div>
				<div className="p-5 space-y-5">
                <p className="pt-2 "><span className="  font-bold ">Posting Date: </span> {job.post}</p>
                <p className="pt-2 "><span className="  font-bold ">Deadline: </span> {job.deadline}</p>
                <p className="pt-2 "><span className="  font-bold ">Posted By: </span> {job.name}</p>
					
				</div>
                </div>
                {
                    dateFromMongoDB > currentDate && job.email!==user.email?(<>
                    {
                        !applied?( <button className="btn w-full py-2 font-semibold rounded border-black" onClick={()=>document.getElementById('my_modal_1').showModal()}>Apply</button>):( <button className="btn w-full py-2 font-semibold rounded border-black" onClick={()=>document.getElementById('my_modal_1').showModal()} disabled>Appied</button>)
                    }</> ):(<p></p>)
                }
				
               
                <dialog id="my_modal_1" className="modal">
                <div className="modal-box  bg-white">
                    <h3 className="font-bold text-lg">Add CV link to apply</h3>
                    <form onSubmit={(e)=>handleApplyJob(e, job._id )} className="card-body space-y-3 t" >
                            <div className="flex  flex-col">
                            <div className="form-control  ">
                            <label className="label">
                                <span className="label-text-bold">CV Link</span>
                            </label>
                            <input type="text" name='cv' placeholder="" className="input input-bordered bg-white" required />
                            </div>
                            
                            <div className="form-control">
                            
                            <input type="text" name='email' value={user.email} className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                            
                            <input type="text" name='name' value={user.displayName} className="input input-bordered bg-white" required />
                            </div>

                            <div className="form-control">
                            
                            <input type="hidden" name='job' value={job.job} className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                            
                            <input type="hidden" name='applicant' value={updateApplicant} className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                            
                            <input type="hidden" name='category' value={job.category} className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                            
                            <input type="hidden" name='photo' value={job.photo} className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                            
                            <input type="hidden" name='salary' value={job.salary} className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                            
                            <input type="hidden" name='description' value={job.description} className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control">
                            
                            <input type="hidden" name='deadline' value={job.deadline} className="input input-bordered bg-white" required />
                            </div>
                            <div className="form-control mt-6">
                            <div className="form-control">
                            
                            <input type="hidden" name='post' value={currentTime} className="input input-bordered bg-white" required />
                            </div>   
                            {
                        !applied?( <button className="btn btn-primary">Apply</button>):( <button className="btn btn-primary" disabled>Applied</button>)
                    }
                            
                            </div>
                            <div className="modal-action mt-6">
                            <form method="dialog" >
                                {/* if there is a button in form, it will close the modal */}
                                
                                <button className="btn btn-primary">Close</button>
                            </form>
                            </div>
                            </div>
                   </form>
                   
                </div>
                </dialog>
			</div>
		</div>
		<img src={job.photo} alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
	</div>
</section>
<ToastContainer /> 
       </div>
      
       
   
    );
};

export default JobDetails;