import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const AllJobs = () => {
    const jobs = useLoaderData();

    const [loading, setLoading]=useState(true)

    useEffect(() => {
        setLoading(false);
    }, [jobs]);
    return (
        <div>
            {
                !loading?(<div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">All Jobs</h2>
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                           
                            <col className="" />
                        </colgroup>
                        <thead>
                            <tr className="dark:bg-gray-300">
                                <th className="p-3">Job Title</th>
                                <th className="p-3">Posting Date</th>
                                <th className="p-3">Deadline</th>
                                <th className="p-3">Salary</th>
                                
                                <th className="p-3">
                                    <span className="btn">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        {
                            jobs.map(job => (
                                <div key={job._id}>

<tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                            <tr>
                                
                                <td className="px-3 py-2">
                                    <p>{job.job}</p>
                                </td>
                                <td className="px-3 py-2">
                                   
                                    <p className="">{job.post}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>{job.deadline}</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>{job.salary}</p>
                                </td>
                               
                                <td className="px-3 py-2">
                                    <Link to={`/details/${job._id}`}><button type="button" className="btn">View Details</button></Link>
                                    
                                </td>
                            </tr>
                            
                        </tbody>

                                </div>
                            ))
                        }
                        
                        
                        
                    </table>
                </div>
            </div>
                ):
                (<span className="loading loading-spinner loading-lg text-5xl text-center flex justify-center content-center items-center justify-contents-center"></span>)
            }
        </div>
    );
};

export default AllJobs;