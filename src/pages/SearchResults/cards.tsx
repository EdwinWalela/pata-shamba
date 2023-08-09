import PropertyCard from '../Landing/propertyCard';
import Lottie from 'lottie-react';
import noListingIcon from '../../assets/no-listing.json';
import loadingIcon from '../../assets/loading.json';
import { useAppSelector } from '../../hooks';

const Cards = (props: any) => {
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
	const isLoading = useAppSelector((state) => state.landingState.isLoading);
	return (
		<div className="p-10">
			{isLoading && (
				<>
					<Lottie animationData={loadingIcon} className="w-40 block mx-auto" />
					<h1 className="block text-center font-medium text-lg">Loading</h1>
				</>
			)}
			{!isLoading && props.data.length == 0 && (
				<>
					<Lottie animationData={noListingIcon} className="w-80 block mx-auto" />
					<h1 className="block text-center font-medium text-lg">No Results Found </h1>
				</>
			)}
			<div className="md:flex justify-center">
				{props.data.map((property: any, index: any) => {
					<PropertyCard data={property} />;
				})}
			</div>
		</div>
	);
};

export default Cards;
