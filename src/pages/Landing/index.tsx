import { Link } from 'react-router-dom';
import landingCover from '../../assets/farmer-landing.jpg';
import searchIcon from '../../assets/search.svg';
import PropertyCard from './propertyCard';
import TopPicks from './topPicks';
import About from './about';

const LandingPage = () => {
	return (
		<div>
			<div
				style={{ backgroundImage: `url(https://i.ibb.co/hyVnCcf/farmer-landing.png)` }}
				className=" min-h-[8rem] py-20 bg-bottom bg-scroll"
			>
				<h1 className="text-7xl text-center font-medium text-blue-500 mb-2">Pata Shamba</h1>
				<h2 className="text-xl text-center text-white mt-2 mb-6">Find Leased Land With Ease</h2>
				<div>
					<form className="mx-auto py-2 bg-white md:w-3/5 w-3/4">
						<div className="md:flex justify-center">
							<div className="mx-2">
								<span className="text-xl my-2 ml-3 block">Location</span>
								<input placeholder="Kiserian, Kajiado" className="py-3 px-2 block md:text-xl" />
							</div>
							<div>
								<span className="text-xl my-2 block">Price</span>
								<input
									placeholder="KES 20,000"
									type="number"
									className="py-3 px-2 block md:text-xl"
								/>
							</div>
							<div className="bg-black p-3">
								<img src={searchIcon} className="w-8 relative top-4" />
							</div>
						</div>
					</form>
				</div>
			</div>
			<TopPicks />
			<About />
		</div>
	);
};

export default LandingPage;
