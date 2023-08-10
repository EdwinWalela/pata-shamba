import PropertyCard from '../Landing/propertyCard';
import warningIcon from '../../assets/warning.svg';

const RecentlyAdded = (props: any) => {
	return (
		<div className="w-1/5">
			<div className="bg-white w-full ml-4 shadow-lg py-2 px-6 mt-5">
				<h3 className="text-center font-medium">
					<span>
						<img src={warningIcon} className="w-5 inline relative mr-2 " />
					</span>
					Safety Tips
				</h3>
				<ul className="text-sm">
					<li className="my-1">- Don't make any payments before site visit</li>
					<li className="my-1">- Meet the owner in a safe space</li>
					<li className="my-1">- Consult a lawyer before any transaction</li>
				</ul>
				<button className="text-center block my-6 w-full mx-auto py-2 bg-red-500 text-white hover:text-red-500 transition-all hover:bg-white hover:border-2 border-2 hover:border-red-500">
					Report This Listing
				</button>
			</div>
			<h1 className="font-medium text-sm pl-6 my-4">Recently Added</h1>
			{props.data.length != 0 &&
				props.data.slice(0, 2).map((property: any, index: any) => (
					<>
						<PropertyCard land={property} />
						<div className="mt-4"></div>
					</>
				))}
		</div>
	);
};

export default RecentlyAdded;
