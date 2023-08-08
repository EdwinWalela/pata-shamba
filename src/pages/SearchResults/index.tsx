import Cards from './cards';
import locationIcon from '../../assets/location-pin.svg';
import priceIcon from '../../assets/pricetag.svg';
const SearchResults = () => {
	return (
		<div className="pt-10">
			<form className="mx-auto py-2 bg-white md:w-2/5 w-3/4">
				<div className="md:flex justify-center text-center">
					<div className="">
						<p className="text-blue-500 font-medium">
							<span>
								<img src={locationIcon} className="w-3 mr-1 inline" />
							</span>
							Location
						</p>
						<input
							placeholder="Kiserian, Kajiado"
							className="py-3 focus:outline-0 border-b-4 text-center w-2/3 mb-3 border-blue-500"
						/>
					</div>
					<div className="">
						<p className="text-blue-500 font-medium">
							<span>
								<img src={priceIcon} className="w-4 mr-1 inline" />
							</span>
							Price
						</p>
						<input
							placeholder="KES 150,000"
							type="number"
							className="py-3 focus:outline-0 text-center border-b-4 w-2/3 mb-3 border-blue-500"
						/>
					</div>
				</div>
				<button className="text-center block w-1/2 mx-auto my-3 py-2 bg-blue-500 text-white hover:text-blue-500 transition-all hover:bg-white hover:border-2 border-2 hover:border-blue-500">
					Search
				</button>
			</form>
			<Cards />
		</div>
	);
};

export default SearchResults;
