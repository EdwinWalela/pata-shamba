import { NavLink } from 'react-router-dom';
import locationIcon from '../../assets/location-pin.svg';

const PropertyCard = (props: any) => {
	return (
		<div className="md:w-full bg-white shadow-xl py-4 mx-4 my-10 md:my-0">
			<div className="px-6">
				<h1 className="font-medium">
					<span>
						<img src={locationIcon} className="w-3 mr-1 inline" />
					</span>
					{props.land.land.location.ward},{props.land.land.location.county}
					<span className="bg-gray-600 hidden md:inline rounded-lg text-white p-2 text-xs float-right">
						{props.land.land.size} Acres
					</span>
				</h1>
				<p className="text-xs mt-6">{props.land.land.description}</p>
				<h3 className="mt-2 font-medium text-blue-500">
					KES {props.land.land.price}{' '}
					<span className="text-gray-600 text-sm ml-1">/ {props.land.land.rate} </span>
				</h3>
				<NavLink to={`/view/${props.land._id}`}>
					<button className="text-center block w-full my-2 py-2 bg-blue-500 text-white hover:text-blue-500 transition-all hover:bg-white hover:border-2 border-2 hover:border-blue-500">
						View
					</button>
				</NavLink>
			</div>
		</div>
	);
};

export default PropertyCard;
