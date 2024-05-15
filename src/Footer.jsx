

const Footer = () => {
    return (
        <div>
        <footer className="py-6 ">
	<div className="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">
		<div className="flex justify-center">
			<div className="pb-6 col-span-full md:pb-0 md:col-span-6">
				<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0on47IArVeqk3qbvkeWIgL2H80VAwthPvkQmJ5v5csg&s" className="w-12" alt="" />
					<span className="self-center text-2xl font-semibold">Job Hunt</span>
				</a>
			</div>
			
			
		</div>
		<div className="grid justify-center pt-6 lg:justify-center">
			<div className="flex flex-col  self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				<span>©2024 All rights reserved</span>
				<a rel="noopener noreferrer" href="#">
					<span>Privacy policy</span>
				</a>
				<a rel="noopener noreferrer" href="#">
					<span>Terms of service</span>
				</a>
			</div>
			
		</div>
	</div>
</footer>
        </div>
    );
};

export default Footer;