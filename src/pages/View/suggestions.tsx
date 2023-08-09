import PropertyCard from '../Landing/propertyCard';

const Suggestions = () => {
	const properties = [
		{
			price: '250,000',
			title: '',
			location: 'Namanga Rd, Kitengela',
			size: 3,
		},
	];
	return (
		<div className="mt-12">
			<h3 className="font-medium text-lg pl-4 mb-1">You Might Also Like</h3>
			<div className="border-blue-500 border-b-4 my-2 w-20 block ml-3 mb-6"></div>
			<div className="flex">
				<PropertyCard data={properties[0]} />
				<PropertyCard data={properties[0]} />
				<PropertyCard data={properties[0]} />
			</div>
		</div>
	);
};

export default Suggestions;
