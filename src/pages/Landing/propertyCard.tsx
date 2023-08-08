import locationIcon from '../../assets/location-pin.svg';

const PropertyCard = () => {
	return (
		<div className="md:w-1/4 shadow-xl py-4 mx-4 my-10 md:my-0">
			<div className="px-6">
				<h1 className="font-medium">
					<span>
						<img src={locationIcon} className="w-3 mr-1 inline" />
					</span>
					Kiserian, Kajiado
				</h1>
				<p className="text-xs mt-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis exercitationem
					aspernatur{' '}
				</p>
				<h3 className="mt-2 font-medium text-blue-500">
					KES 250,000 <span className="text-gray-600 text-sm ml-1">/ Year </span>
				</h3>
				<button className="text-center block w-full my-2 py-2 bg-blue-500 text-white">View</button>
			</div>
		</div>
	);
};

export default PropertyCard;
