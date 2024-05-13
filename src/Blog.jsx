

const Blog = () => {
    return (
        <div className="space-y-4">

<div className="dark:text-gray-800">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-600">June 1, 2020</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-gray-600 dark:text-gray-50">ReactJS</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline"> What is an access token and refresh token? How do they work and where should
we store them on the client side?
</a>
			<p className="mt-2">An access token is a credential used by a client to access protected resources on an API. Its typically short-lived and grants permission to perform specific actions. A refresh token is a longer-lived credential used to obtain a new access token after the current one expires, without requiring the user to log in again. Access tokens are usually stored in memory or local storage on the client side for short-term use, while refresh tokens should be stored securely, often in an HTTP-only cookie or secure storage, to prevent unauthorized access in case of theft.</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			
			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline dark:text-gray-600">Leroy Jenkins</span>
				</a>
			</div>
		</div>
	</div>
</div>

<div className="dark:text-gray-800">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-600">June 30, 2022</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-gray-600 dark:text-gray-50">MERN Stack</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What is express js? What is Nest JS?</a>
			<p className="mt-2">Express.js is a minimalist web application framework for Node.js, designed to build robust and scalable web applications and APIs quickly and with minimal overhead. It provides a simple and flexible set of features for building web servers, handling HTTP requests and responses, routing, middleware integration, and more. With its unopinionated nature, developers have the freedom to structure their applications as they see fit, making it highly customizable and widely adopted in the Node.js ecosystem.
<br></br>
NestJS, on the other hand, is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It leverages TypeScript, object-oriented programming, and functional programming techniques to provide a more structured and opinionated approach to building applications compared to Express.js. NestJS is built on top of Express.js and provides a modular architecture, dependency injection, middleware support, and a powerful CLI for generating boilerplate code and managing application structure. It aims to streamline the development process and improve code maintainability and testability, making it a popular choice for building enterprise-grade applications.</p>
		</div>
		<div className="flex items-center justify-between mt-4">
			
			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline dark:text-gray-600">Leroy Jenkins</span>
				</a>
			</div>
		</div>
	</div>
</div>

<div className=" dark:text-gray-800">
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
		<div className="flex items-center justify-between">
			<span className="text-sm dark:text-gray-600">July 1, 2022</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-gray-600 dark:text-gray-50">Personal</a>
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">About my homepage code</a>
			<p className="mt-2">The provided code is a React component called Home that renders a job search page with tabs for different job categories (All, Onsite, Remote, Part-time, and Hybrid) and pagination for each tab.

It begins by importing necessary modules from React, React Router, and React Tabs, and defines the Home component. Inside the component, it initializes state variables for managing the current page number and the number of items per page.

The useLoaderData hook is used to fetch job data from the server.

Within the render method, a Tabs component is used to create tabs for each job category. Inside each TabPanel, the jobs corresponding to the selected category are displayed in a grid layout. Pagination is implemented using a Pagination component, which receives the total number of items and the current page number as props.

The Pagination component generates a list of page numbers and handles page change events through a callback function.

Overall, this code dynamically renders job listings categorized by type and allows users to navigate through multiple pages of job listings within each category, providing an organized and user-friendly job search experience.</p>
		</div>
		<div className="flex items-center justify-between mt-4">

			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline dark:text-gray-600">Leroy Jenkins</span>
				</a>
			</div>
		</div>
	</div>
</div>
            
        </div>
    );
};

export default Blog;