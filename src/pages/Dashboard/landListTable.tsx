import { Link } from 'react-router-dom';
import LandListTableItem from './tableItem';
import PropertyCard from './propertyCard';
import noListingIcon from '../../assets/no-listing.json';
import Lottie from 'lottie-react';

const LandListTable = (props: any) => {
	return (
		<div>
			<h1 className="font-medium text-lg">Lands Pending Vetting</h1>
			<div className="border-blue-500 border-b-4 my-2 w-20 block "></div>
			{props.data.length == 0 && (
				<>
					<Lottie animationData={noListingIcon} className="w-80 block mx-auto" />
					<h1 className="block text-center font-medium text-lg">No Listings Available</h1>
				</>
			)}
			<div className="flex">
				{props.data.map((property: any, index: number) => (
					<PropertyCard key={index} data={property} />
				))}
			</div>
		</div>
	);
};

export default LandListTable;
