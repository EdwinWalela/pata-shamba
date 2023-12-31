import { NavLink, useNavigate } from 'react-router-dom';
import locationIcon from '../../assets/location-pin.svg';
import { useAppDispatch } from '../../hooks';
import { approveLand, rejectLand } from './slice';

const PropertyCard = (props: any) => {
	const dispatch = useAppDispatch();
	const id = props.data._id;
	const navigate = useNavigate();

	function handleApproveLand() {
		dispatch(approveLand({ id: id }));
		navigate('/dashboard');
	}

	function handleRejectLand() {
		dispatch(rejectLand({ id }));
	}

	return (
		<div className="md:w-3/4 md:max-w-lg shadow-xl py-4 mx-auto my-10 md:my-0">
			<div className="px-6">
				<h1 className="font-medium">
					<span>
						<img src={locationIcon} className="w-3 mr-1 inline" />
					</span>
					{props.data.land.location.ward},{props.data.land.location.county}
					<span className="bg-gray-600 hidden md:inline rounded-lg text-white p-2 text-xs float-right">
						{props.data.land.size} Acres
					</span>
				</h1>
				<p className="text-xs mt-6">{props.data.land.description}</p>
				<div className="flex">
					<h3 className="mt-2  font-medium text-blue-500">
						KES {props.data.land.price} <span className="text-gray-600 text-sm ml-1">/ Year </span>
					</h3>
					<h3 className="mt-2 md:ml-24 font-medium text-blue-500">{props.data.phone}</h3>
				</div>
				<div className="flex">
					<NavLink to="#" className="w-1/2" onClick={handleApproveLand}>
						<button className="text-center block w-full my-2 py-2 bg-blue-500 text-white hover:text-blue-500 transition-all hover:bg-white hover:border-2 border-2 hover:border-blue-500">
							Approve
						</button>
					</NavLink>
					<NavLink to="#" className="w-1/2" onClick={handleRejectLand}>
						<button className="text-center block w-full my-2 py-2 bg-red-500 text-white hover:text-red-500 transition-all hover:bg-white hover:border-2 border-2 hover:border-red-500">
							Reject
						</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default PropertyCard;
