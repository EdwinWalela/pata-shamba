import PropertyCard from './propertyCard';

const TopPicks = (props: any) => {
	return (
		<div className="p-10">
			<h1 className="text-2xl mb-6 text-center md:text-left">Top Picks</h1>
			<div className="md:flex justify-center">
				{props.lands.map((data: any, index: any) => (
					<PropertyCard land={data} key={index} />
				))}
			</div>
		</div>
	);
};

export default TopPicks;
