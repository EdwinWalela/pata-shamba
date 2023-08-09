const StatBar = (props: any) => {
	return (
		<div className="md:flow-root mb-8 hidden">
			<div className="md:w-1/4 w-full bg-blue-500 text-white md:float-left p-10 rounded-lg shadow-lg text-center mx-10 cursor-pointer hover:bg-white hover:text-blue-500 border hover:border-blue-500 transition-all ease-in-out">
				<h1 className="text-4xl font-medium">{props.data.length}</h1>
				<h1 className="text-lg  mt-3  font-medium">Lands Pending Vetting</h1>
			</div>
			<div className="md:w-1/4 w-full bg-slate-700 text-white md:float-left p-10 rounded-lg shadow-lg text-center mx-10 cursor-pointer hover:bg-white hover:text-slate-700 border hover:border-slate-700 transition-all ease-in-out">
				<h1 className="text-4xl  font-medium"> 7</h1>
				<h1 className="text-lg mt-3 font-medium">Verified Lands</h1>
			</div>
			<div className="md:w-1/4 w-full bg-indigo-700 text-white md:float-left p-10 rounded-lg shadow-lg text-center mx-10 cursor-pointer hover:bg-white hover:text-indigo-700 border hover:border-indigo-700 transition-all ease-in-out">
				<h1 className="text-4xl  font-medium">12</h1>
				<h1 className="text-lg mt-3 font-medium">Total Listings</h1>
			</div>
		</div>
	);
};

export default StatBar;
