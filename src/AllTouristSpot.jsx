import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ImPriceTag } from "react-icons/im";
import { FaUserGroup } from "react-icons/fa6";
import { FaPlaneCircleCheck } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa";


const AllTouristSpot = () => {
    const spots = useLoaderData();
    const [order, setOrder] = useState(spots);
    
    const [loading, setLoading]=useState(true)

    useEffect(() => {
        setLoading(false);
    }, [spots]);
    


    console.log(order)

    const handleSort = (sortType) => {
        let sortedSpots = [...order]; 
        if (sortType === 'Ascending') {
            sortedSpots.sort((a, b) => a.cost - b.cost);
        } else if (sortType === 'Descending') {
            sortedSpots.sort((a, b) => b.cost - a.cost);
        }
        setOrder(sortedSpots); 
    };

    return (
        <div>
            {
                !loading?(<div>
                    <div className="flex justify-center">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1">Average Cost Sort</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li onClick={() => handleSort("Ascending")}><a>Low to High</a></li>
                                <li onClick={() => handleSort("Descending")}><a>High to Low</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-2 justify-center content-center justify-items-center p-5">
                    {
                        order.map(spot => (
                            <div key={spot._id} className="card card-compact w-[30vw] bg-base-100 border-2 shadow-xl">
                                <figure><img className='h-[300px]' src={spot.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-3xl">{spot.spot}</h2>
                                    <div className="border-2 rounded-xl flex flex-col justify-center content-center justify-items-center items-center gap-3 p-3 text-lg">
                                    <div className="flex flex-row">
                                    <ImPriceTag />
                                    <p>Average Cost: {spot.cost}</p>
                                    </div>
                                    <div className="flex flex-row">
                                    <FaUserGroup />
                                    <p>Total Visitors/Year: {spot.visitor}</p>
                                    </div>
                                    <div className="flex flex-row"> 
                                    <FaPlaneCircleCheck />
                                    <p>Travel Time: {spot.time}</p>
                                    </div>
                                    <div className="flex flex-row">
                                    <FaCloudSun />
                                    <p>Seasonality: {spot.seasonality}</p>
                                    </div>
                                    </div>
                                    <div className="card-actions justify-end">
                                        
                                        <Link to={`/details/${spot._id}`}><button className="btn btn-primary">Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>):(<span className="loading loading-spinner loading-lg text-5xl text-center flex justify-center content-center items-center justify-contents-center"></span>)
            }
        </div>
    );
};

export default AllTouristSpot;
