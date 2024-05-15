import { useQuery } from "@tanstack/react-query";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const AllJobs = () => {
    //const jobs = useLoaderData();

    const {isLoading, isError, data: jobs}= useQuery({
        queryKey: ['jobs'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/jobs')
            return res.json()
        }
    })

    console.log(jobs)

    

    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        if (!isLoading && !isError){
            setFilteredJobs(jobs); 
            setLoading(false);
        }
        
    }, [jobs, isLoading, isError]);

    
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        filterJobs(e.target.value); 
    };

    
    const filterJobs = (query) => {
        const filtered = jobs.filter(job => job.job.toLowerCase().includes(query.toLowerCase()));
        setFilteredJobs(filtered);
    };

    

    if (isLoading) {
        return <span className="loading loading-spinner loading-lg text-5xl text-center flex justify-center content-center items-center justify-contents-center"></span>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    return (
        <div>
            {
                !loading ? (
                    <div className="container p-2 mx-auto sm:p-4 ">
                        <h2 className="mb-4 text-3xl flex justify-center font-semibold ">All Jobs</h2>
                        <div className="flex items-center mb-4  space-x-3 justify-start">
                        <FaSearch />
                            <input
                                type="text"
                                className="w-1/2 px-3 py-2 input input-bordered rounded-md "
                                placeholder="Search by job title"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full p-6 text-lg text-center whitespace-nowrap dark:text-black">
                                <thead>
                                    <tr className="dark:bg-gray-300">
                                        <th className="p-3">Photo</th>
                                        <th className="p-3">Job Title</th>
                                        <th className="p-3">Posting Date</th>
                                        <th className="p-3">Deadline</th>
                                        <th className="p-3">Salary</th>
                                        <th className="p-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                                    {
                                        filteredJobs.map(job => (
                                            <tr key={job._id} className="">
                                                <td className="px-3 py-2 w-40">
                                                    <img src={job.photo} alt="" />
                                                </td>
                                                <td className="px-3 py-2 text-3xl">
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
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <span className="loading loading-spinner loading-lg text-5xl text-center flex justify-center content-center items-center justify-contents-center"></span>
                )
            }
        </div>
    );
};

export default AllJobs;
