import { useLoaderData } from "react-router-dom";

import { ImPriceTag } from "react-icons/im";
import { FaUserGroup } from "react-icons/fa6";
import { FaPlaneCircleCheck } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const SpotDetails = () => {
    const spot= useLoaderData()
    return (
        <div>
             <div className="flex flex-col lg:flex-row gap-10 justify-center content-center justify-items-center items-center pt-10">
                <div className="lg:w-[500px] w-[300px] "><img src={spot.photo} alt="" /></div>
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-5xl">{spot.spot}</h1>
                    <div className="flex flex-row justify-center gap-3">
                        <span className="h-[30px] text-lg"> <FaLocationDot /></span>
                   
                    <p className="font-semibold text-2xl text-center text-gray-500"> {spot.location}, {spot.country}</p>
                    </div>
                    <div className=" lg:w-[600px]">
                    <p className="border-y-2 py-2 font-light "><span className="font-bold">Description: </span>{spot.description}</p>
                    </div>
                    
                    <p className="pt-2 "><span className="  font-bold "><ImPriceTag />Average Cost: </span> {spot.cost}</p>
                    
                    <p className="font-bold"><FaUserGroup />Total visitors/year: <span className="font-normal">{spot.visitor}</span></p>
                    <p className="font-bold"><FaPlaneCircleCheck />Travel Time: <span className="font-normal">{spot.time}</span></p>
                    <p className="font-bold"><FaCloudSun />Seasonality: <span className="font-normal">{spot.seasonality}</span></p>
                    
                    
                </div>
            </div>
           
            
        </div>
    );
};

export default SpotDetails;