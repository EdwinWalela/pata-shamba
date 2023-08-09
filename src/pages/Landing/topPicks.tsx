import PropertyCard from './propertyCard';

const TopPicks = (props: any) => {
	const properties = [
		{
			price: '250,000',
			title:
				'Rectangular, slightly sloppy plot with a perimeter wall. Electricity and water services available',
			location: 'Namanga Rd, Kitengela',
			size: 3,
		},
		{
			price: '50,000',
			title: 'Commercial plot fronting Namanga Road. Best for maize and livestock farming',
			location: 'Nyasa Rd, Embakasi',
			size: 1.5,
		},
		{
			price: '850,000',
			title:
				'Electricity and water next to this land for connection The sewer line is next to this land for connection',
			location: 'Kiserian, Kajiado',
			size: 10,
		},
		{
			price: '78,500',
			title: 'Gentle sloppy red soil land Electricity and water next to this land for connection',
			location: 'Marugu, Kabete',
			size: 0.5,
		},
	];
	return (
		<div className="p-10">
			<h1 className="text-2xl mb-6 text-center md:text-left">Top Picks</h1>
			<div className="md:flex justify-center">
				{props.lands.map((data: any, index: any) => {
					<PropertyCard data={data} />;
				})}
			</div>
		</div>
	);
};

export default TopPicks;
