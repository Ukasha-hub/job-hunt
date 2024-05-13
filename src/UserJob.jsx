import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserJob = () => {
    const jobs = useLoaderData();

    const [loading, setLoading]=useState(true)

    useEffect(() => {
        setLoading(false);
    }, [jobs]);

    const navigate= useNavigate()
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
            
            fetch(`http://localhost:5000/jobs/${id}`,{
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
                navigate(`/userJob`)
              }
              else {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to delete !",
                    icon: "error"
                });
            }
            })
            .catch(error => {
              console.error('Error updating :', error);
              Swal.fire({
                  title: "Error!",
                  text: "Failed to delete !",
                  icon: "error"
              });
          });
          }
        });
      }
    return (
        <div>
        {
            !loading?(<div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold ">All Jobs</h2>
            <div className="overflow-x-auto">
                <table className=" w-full p-6 text-lg text-center whitespace-nowrap">
                    <thead>
                        <tr className="dark:bg-gray-300">
                            <th className="p-3">Job Title</th>
                            <th className="p-3">Post Date</th>
                            <th className="p-3">Job category</th>
                            <th className="p-3">Salary Range</th>
                            
                            <th className="p-3">
                                Action
                            </th>
                            
                        </tr>
                    </thead>
                    

                    <tbody className="border-b dark:bg-gray-50 dark:border-gray-300  ">
                        {
                            jobs.map(job => (
                            
                            <tr key={job._id} className="">
                            
                                    <td className="px-3 py-2 text-3xl">
                                        <p>{job.job}</p>
                                    </td>
                                    <td className="px-3 py-2">
                                    
                                        <p className="">{job.post}</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        <p>{job.category}</p>
                                    </td>
                                    <td className="px-3 py-2">
                                        <p>{job.salary}</p>
                                    </td>
                                
                                    <td className="px-3 py-2 space-x-2">
                                        <Link to={`/details/${job._id}`}><button type="button" className="btn">View Details</button></Link>
                                        <Link to={`/userJob/updateJob/${job._id}`}><button type="button" className="btn">Edit</button></Link>
                                        <Link><button onClick={()=> handleDelete(job._id)} className="btn  bg-red-600">Delete</button></Link>
                                    </td>
                            </tr>
                                

                            ))        
                            
                        }
                      
                        
                        
                        
                    </tbody>

                           
                  
                    
                    
                    
                </table>
            </div>
        </div>
            ):
            (<span className="loading loading-spinner loading-lg text-5xl text-center flex justify-center content-center items-center justify-contents-center"></span>)
        }
    </div>
    );
};

export default UserJob;