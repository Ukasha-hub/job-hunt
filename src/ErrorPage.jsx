import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
<section className="flex items-center text-center h-full p-16 ">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md ">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
				<span className="">Error:</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, Page not found.</p>
			
			<button className="btn lg:btn-md btn-sm mt-10">
                        <Link to='/'>Back to Homepage</Link></button>
		</div>
	</div>
</section>
        </div>
    );
};

export default ErrorPage;