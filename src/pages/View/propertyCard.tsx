import { NavLink } from 'react-router-dom';
import callIcon from '../../assets/call.svg';
import locationIcon from '../../assets/location-pin.svg';
import Carousel from './carousel';

const PropertyCard = (props: any) => {
	return (
		<div className="md:w-full shadow-xl py-4 mx-4 my-10 md:my-0">
			<div className="px-6">
				<img
					className="w-3/4 h-80 block mx-auto my-4"
					src="https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				/>
				<div className="px-0">
					<h1 className="font-medium">
						<span>
							<img src={locationIcon} className="w-3 mr-1 inline" />
						</span>
						{props.data.location}
						<span className="bg-gray-600 hidden md:inline rounded-lg text-white p-2 text-xs float-right">
							{props.data.size} Acres
						</span>
					</h1>
					<p className="text-sm mt-3">{props.data.title}</p>
					<div className="">
						<h3 className="mt-2 font-bold text-blue-500">
							KES {props.data.price} <span className="text-gray-600 text-sm ml-1">/ Year </span>
						</h3>
						<h1 className="font-medium float-right bottom-6 relative">
							<span>
								<img src={callIcon} className="w-4 mr-1 inline" />
							</span>
							070000001
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropertyCard;
