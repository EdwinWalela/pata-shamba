import PropertyCard from './propertyCard';

const TopPicks = () => {
	return (
		<div className="p-10">
			<h1 className="text-2xl mb-6 text-center md:text-left">Top Picks</h1>
			<div className="md:flex justify-center">
				<PropertyCard />
				<PropertyCard />
				<PropertyCard />
				<PropertyCard />
			</div>
		</div>
	);
};

export default TopPicks;
