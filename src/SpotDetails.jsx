import { useLoaderData } from "react-router-dom";

import { ImPriceTag } from "react-icons/im";
import { FaUserGroup } from "react-icons/fa6";
import { FaPlaneCircleCheck } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const SpotDetails = () => {
    const job= useLoaderData()
    return (
        <div>
             <div className="flex flex-col lg:flex-row gap-10 justify-center content-center justify-items-center items-center pt-10">
                <div className="lg:w-[500px] w-[300px] "><img src={job.photo} alt="" /></div>
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-5xl">{job.job}</h1>
                    <div className="flex flex-row justify-center gap-3">
                        <span className="h-[30px] text-lg"> <FaLocationDot /></span>
                   
                    <p className="font-semibold text-2xl text-center text-gray-500"> {job.category}</p>
                    </div>
                    <div className=" lg:w-[600px]">
                    <p className="border-y-2 py-2 font-light "><span className="font-bold">Description: </span>{job.description}</p>
                    </div>
                    
                    <p className="pt-2 "><span className="  font-bold "><ImPriceTag />Average Cost: </span> {job.salary}</p>
                    
                    <p className="font-bold"><FaUserGroup />Total visitors/year: <span className="font-normal">{job.post}</span></p>
                    <p className="font-bold"><FaPlaneCircleCheck />Travel Time: <span className="font-normal">{job.deadline}</span></p>
                    <p className="font-bold"><FaCloudSun />Seasonality: <span className="font-normal">{job.name}</span></p>
                    
                    
                </div>
            </div>
           
            
        </div>
    );
};

export default SpotDetails;