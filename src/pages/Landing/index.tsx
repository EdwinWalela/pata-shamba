import TopPicks from './topPicks';
import About from './about';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchTopPicks } from './slice';
import Search from './search';

const LandingPage = () => {
	const dispatch = useAppDispatch();
	const topPicks = useAppSelector((state) => state.landingState.topPicks);
	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(fetchTopPicks({}));
	}, []);
	return (
		<div className="">
			<div
				style={{ backgroundImage: `url(https://i.ibb.co/hyVnCcf/farmer-landing.png)` }}
				className=" min-h-[8rem] py-20 bg-bottom bg-scroll"
			>
				<h1 className="text-7xl text-center font-medium text-blue-500 mb-2">Pata Shamba</h1>
				<h2 className="text-xl text-center text-white mt-2 mb-6">Find Leased Land With Ease</h2>
				<Search />
			</div>
			<TopPicks lands={topPicks} />
			<About />
		</div>
	);
};

export default LandingPage;
