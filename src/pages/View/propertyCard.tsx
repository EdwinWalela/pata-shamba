import { NavLink } from 'react-router-dom';
import callIcon from '../../assets/call.svg';
import locationIcon from '../../assets/location-pin.svg';
import Carousel from './carousel';
import RecentlyAdded from './recentlyAdded';
import Lottie from 'lottie-react';
import loadingIcon from '../../assets/loading.json';
import Suggestions from './suggestions';
import fblogo from '../../assets/fblogo.svg';
import whatsapplogo from '../../assets/whatsapplogo.svg';
import twitterLogo from '../../assets/twitterlogo.svg';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchLandById } from './slice';
import { fetchTopPicks } from '../Landing/slice';

const PropertyCard = (props: any) => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const land = useAppSelector((state) => state.landDetail.land);
	const recentlyAdded = useAppSelector((state) => state.landingState.topPicks);
	const isLoading = useAppSelector((state) => state.landDetail.isLoading);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchLandById({ id }));
		dispatch(fetchTopPicks({}));
	}, []);

	return (
		<div className="h-screen px-6 py-4 mx-4 my-10 md:my-0">
			{isLoading && (
				<div className="">
					<Lottie animationData={loadingIcon} className="w-80 block my-12 mx-auto" />
				</div>
			)}
			{!isLoading && (
				<div className="flex">
					<div className="md:w-4/5">
						<img
							className="w-3/4 h-80 block mx-auto my-4"
							src="https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						/>
						<div className="px-9 py-8 bg-white w-3/4 mx-auto">
							<h1 className="font-medium">
								<span>
									<img src={locationIcon} className="w-3 mr-1 inline" />
								</span>
								{land.location}
								<span className="bg-gray-600 hidden md:inline rounded-lg text-white p-2 text-xs float-right">
									{land.size} Acres
								</span>
							</h1>
							<p className="text-md mt-6">{land.description}</p>
							<div className="">
								<h3 className="mt-6 font-bold text-blue-500">
									KES {land.price} <span className="text-gray-600 text-sm ml-1">/ Month </span>
								</h3>
								<h1 className="font-medium float-right bottom-6 relative">
									{land.ownerName}
									<br />
									<span>
										<img src={callIcon} className="w-4 mr-1 inline" />
									</span>
									{land.ownerPhone}
								</h1>
							</div>
							<h3 className="font-medium text-sm mt-4 mb-2">
								Interested in this listing? Share with others
							</h3>
							<div className="flex">
								<img src={fblogo} className="w-6 mx-3 cursor-pointer" />
								<img src={whatsapplogo} className="w-6 mx-3 cursor-pointer" />
								<img src={twitterLogo} className="w-6 mx-3 cursor-pointer" />
							</div>
						</div>
					</div>
					<RecentlyAdded data={recentlyAdded} />
				</div>
			)}
			{/* <Suggestions /> */}
		</div>
	);
};

export default PropertyCard;
