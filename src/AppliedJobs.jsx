import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("All"); 

    useEffect(() => {
        setLoading(false);
    }, [jobs]);

    
    const filteredJobs = filter === "All" ? jobs : jobs.filter(job => job.category === filter);

    
    const jobCategories = [...new Set(jobs.map(job => job.category))];

    return (
        <div>
            {!loading ? (
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                    <h2 className="mb-4 text-2xl font-semibold ">All Jobs</h2>
                    <div className="flex justify-center mb-4">
                        <p>Filter By:</p>
                        <select value={filter}  onChange={e => setFilter(e.target.value)} className="mx-2 px-4 py-2 rounded-lg select select-bordered w-full max-w-xs text-gray-400">
                            <option value="All">All</option>
                            {jobCategories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full p-6 text-lg text-center whitespace-nowrap">
                            <thead>
                                <tr className="dark:bg-gray-300">
                                    <th className="p-3">Job Title</th>
                                    <th className="p-3">Applying Date</th>
                                    <th className="p-3">Job category</th>
                                    <th className="p-3">CV link</th>
                                </tr>
                            </thead>
                            <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                                {filteredJobs.map(job => (
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
                                            <p>{job.cv}</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <span className="loading loading-spinner loading-lg text-5xl text-center flex justify-center content-center items-center justify-contents-center"></span>
            )}
        </div>
    );
};

export default AppliedJobs;
