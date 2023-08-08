import handIcon from '../../assets/handshake.json';
import walletIcon from '../../assets/wallet-lottie.json';
import ussdIcon from '../../assets/ussd.json';
import verifiedIcon from '../../assets/verified.json';

import Lottie from 'lottie-react';

const About = () => {
	return (
		<div className="p-10 ">
			<h1 className="text-3xl mb-2 text-center pr-4">How it Works</h1>
			<div className="border-blue-500 border-b-4 my-2 w-20 block mx-auto"></div>
			<p className="text-gray-500 mb-4 mt-4 text-center">
				We make it effortless for tenants to find land in{' '}
				<span className="text-blue-500"> 4 easy steps</span>
			</p>
			<div className="md:flex justify-center">
				<div className="mx-6">
					<Lottie animationData={ussdIcon} className="w-40 mx-auto" />
					<h2 className="text-center font-medium">Step 1: Onboarding</h2>
					<p className="text-xs text-center my-2">
						Land owners register using our USSD. Through the help of our sales team, land data is
						captured and submitted for verification
					</p>
				</div>
				<div className="mx-6">
					<Lottie animationData={verifiedIcon} className="w-40 mx-auto" />
					<h2 className="text-center font-medium">Step 2: Verification</h2>
					<p className="text-xs text-center my-2">
						Our internal team of professionals verifies data submitted by farmers to ensure quality
						and genuine listings are on our platform
					</p>
				</div>
				<div className="mx-6 pb-10">
					<Lottie animationData={handIcon} className="w-40 relative md:block left-12 md:left-0" />
					<h2 className="text-center font-medium">Step 3: Agreement</h2>
					<p className="text-xs text-center my-2">
						Browse listing on our platform and contact land owner to reach an agreement
					</p>
				</div>
				<div className="mx-10 pb-10 md:relative md:bottom-24">
					<Lottie animationData={walletIcon} className="w-60" />
					<h2 className="text-center font-medium md:bottom-16 md:relative">Step 4: Transact</h2>
					<p className="text-xs text-center my-2 md:relative md:bottom-16">
						Once you have agreed on terms, conclude the process by transacting with the land owner
					</p>
				</div>
			</div>
			<button className="text-center block md:w-1/5 w-3/4 mx-auto md:mt-14 md:mt-0 md:relative md:bottom-32 py-2 bg-blue-500 text-white">
				Get Started
			</button>
		</div>
	);
};

export default About;
