
// Import Swiper React components


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';






// import required modules

import { Link, useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';














const Home = () => {

  
    
   
   //const jobs= useLoaderData()


   const {isLoading, isError, data: jobs}= useQuery({
    queryKey: ['jobs'],
    queryFn: async ()=>{
        const res = await fetch('http://localhost:5000/jobs')
        return res.json()
    }
})
   
  




if (isLoading) {
  return <span className="loading loading-spinner loading-lg text-5xl text-center flex justify-center content-center items-center justify-contents-center"></span>;
}

if (isError) {
  return <div>Error fetching data</div>;
}

   
   

    return (
        <div>
            
            <>

            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://www.ucl.ac.uk/work-at-ucl/sites/work_at_ucl/files/dark_purple_search3.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-left text-neutral-content">
    <motion.div animate={{scale:1.1, rotateZ:360,  y:-80}} transition={{delay:0.5, duration:1.5}} className="max-w-lg">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Job-Hunt</h1>
      <p className="mb-5">Discover diverse job listings, streamline your search with intuitive filters, and enjoy responsive support on our user-friendly platform designed to optimize your employment journey.</p>
      
    </motion.div>
  </div>
</div>
               
            </>
            
             
             <div className=''>
             <h1 className=' rounded-xl p-5 mb-5 mt-5 text-4xl font-bold flex justify-start'>Available Jobs </h1>
             </div>

             <Tabs>
    <TabList>
      <Tab>All</Tab>
      <Tab>Onsite</Tab>
      <Tab>Remote</Tab>
      <Tab>Part-time</Tab>
      <Tab>Hybrid</Tab>
    </TabList>

    <TabPanel>
      <>
      <div  className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 justify-center content-center justify-items-center p-5'>
             {
                        jobs.map(job => (
                          <div  key={job._id} className="">
                          <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                            <img src={job.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8 ">
                              <div className="space-y-2 ">
                                <h2 className="text-3xl  font-semibold tracking-wide">{job.job}</h2>
                                <p className="dark:text-gray-500">Posted by {job.name}</p>
                                <ul className='list-disc p-5'>
                                  <li>Posting date:{job.post}</li>
                                  <li>Application deadline: {job.deadline}</li>
                                  <li>Salary range:{job.salary}</li>
                                  <li>Number of applicants:{job.applicant}</li>
                                </ul>
                              </div>
                              <Link to={`/details/${job._id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details</button></Link>
                              
                            </div>
                          </div>
                      </div>
                        ))
                    }
             </div>
      </>
    </TabPanel>
    <TabPanel>
    <>
    <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 justify-center content-center justify-items-center p-5'>
        {jobs.map(job => (
            job.category === 'Onsite' ? (
                <div key={job._id} className="">
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                      <img src={job.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                      <div className="flex flex-col justify-between p-6 space-y-8 ">
                        <div className="space-y-2 ">
                          <h2 className="text-3xl  font-semibold tracking-wide">{job.job}</h2>
                          <p className="dark:text-gray-500">Posted by {job.name}</p>
                          <ul className='list-disc p-5'>
                            <li>Posting date:{job.post}</li>
                            <li>Application deadline: {job.deadline}</li>
                            <li>Salary range:{job.salary}</li>
                            <li>Number of applicants:{job.applicant}</li>
                          </ul>
                        </div>
                        <Link to={`/details/${job._id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details</button></Link>
                        
                      </div>
                    </div>
                </div>
            ) : null
        ))}
    </div>

      </>
      </TabPanel> 
    <TabPanel>
    <>
    <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 justify-center content-center justify-items-center p-5'>
        {jobs.map(job => (
            job.category === 'Remote' ? (
              <div key={job._id} className="">
              <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src={job.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8 ">
                  <div className="space-y-2 ">
                    <h2 className="text-3xl  font-semibold tracking-wide">{job.job}</h2>
                    <p className="dark:text-gray-500">Posted by {job.name}</p>
                    <ul className='list-disc p-5'>
                      <li>Posting date:{job.post}</li>
                      <li>Application deadline: {job.deadline}</li>
                      <li>Salary range:{job.salary}</li>
                      <li>Number of applicants:{job.applicant}</li>
                    </ul>
                  </div>
                  <Link to={`/details/${job._id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details</button></Link>
                  
                </div>
              </div>
          </div>
            ) : null
        ))}
    </div>

      </>
    </TabPanel>
    <TabPanel>
    <>
    <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 justify-center content-center justify-items-center p-5'>
        {jobs.map(job => (
            job.category === 'Part-time' ? (
              <div key={job._id} className="">
              <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src={job.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8 ">
                  <div className="space-y-2 ">
                    <h2 className="text-3xl  font-semibold tracking-wide">{job.job}</h2>
                    <p className="dark:text-gray-500">Posted by {job.name}</p>
                    <ul className='list-disc p-5'>
                      <li>Posting date:{job.post}</li>
                      <li>Application deadline: {job.deadline}</li>
                      <li>Salary range:{job.salary}</li>
                      <li>Number of applicants:{job.applicant}</li>
                    </ul>
                  </div>
                  <Link to={`/details/${job._id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details</button></Link>
                  
                </div>
              </div>
          </div>
            ) : null
        ))}
    </div>

      </>
    </TabPanel>
    <TabPanel>
    <>
    <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-10 justify-center content-center justify-items-center p-5'>
        {jobs.map(job => (
            job.category === 'Hybrid' ? (
              <div key={job._id} className="">
              <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src={job.photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8 ">
                  <div className="space-y-2 ">
                    <h2 className="text-3xl  font-semibold tracking-wide">{job.job}</h2>
                    <p className="dark:text-gray-500">Posted by {job.name}</p>
                    <ul className='list-disc p-5'>
                      <li>Posting date:{job.post}</li>
                      <li>Application deadline: {job.deadline}</li>
                      <li>Salary range:{job.salary}</li>
                      <li>Number of applicants:{job.applicant}</li>
                    </ul>
                  </div>
                  <Link to={`/details/${job._id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Details</button></Link>
                  
                </div>
              </div>
          </div>
            ) : null
        ))}
    </div>

      </>
    </TabPanel>
  </Tabs>

             

    <div>
    <section className="p-6  dark:text-gray-800">
	<div className="container grid gap-2 mx-full text-center lg:grid-cols-2 xl:grid-cols-3">
  <div><iframe className='object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500' src="https://www.youtube.com/embed/JF0IukoW8to?si=Q1RjMLsrcFUV5bsB" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
  
  
		<div className="w-full flex flex-col space-y-3  px-2 py-10 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
			
			<h1 className="text-3xl text-left font-bold  dark:text-gray-900">Up your work game, it’s easy</h1>
      <p className='text-left'>No cost to join. Register and browse professionals, explore projects, or even book a consultation. Post a job and hire top talent. Finding talent doesn’t have to be a chore. Post a job or we can search for you! Work with the best—without breaking the bank
        Upwork makes it affordable to up your work and take advantage of low transaction rates.</p>
			<div className='flex justify-start '><Link to='/register'><button className='btn border-black'>Register</button></Link></div>
      
		</div>
    
		
	</div>
</section>
      </div>         
      

             

             


             


              <div>
              <section className="my-8">
	<div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
		<h1 className="text-4xl font-semibold leading-none text-center">Words from Job hunters</h1>
	</div>
	<div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
		<div className="flex flex-col items-center mx-12 lg:mx-0 ">
			<div className="relative text-center ">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">I wanted to take a moment to express my sincere gratitude for the exceptional experience I've had using your platform. As a job seeker, navigating the employment market can often feel overwhelming, but this website has truly been a game-changer for me.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-gray-600"></span>
			<p>Jeffery Dahmer</p>
		</div>
		<div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300">
					<path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">Thanks to your website, I was able to find the perfect job opportunity that aligns with my skills, interests, and career goals. I am thrilled to embark on this new professional journey, and I owe a large part of my success to your platform.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300">
					<path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-gray-600"></span>
			<p>Mark Twain</p>
		</div>
	</div>
</section>
              </div>


                
             

            
              
        </div>
    );
};

export default Home;