import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

const NavBar = () => {
	const token = useAppSelector((state) => state.login.token);
	const location = useLocation();
	const home = location.pathname == '/';
	const respondent = location.pathname.includes('/survey/');

	return (
		<div className="flex shadow-md md:px-5 py-3">
			<div>
				<h1 className="text-2xl md:pl-0 pl-3 text-blue-500 font-medium">
					<Link to="/">Pata Shamba</Link>
				</h1>
			</div>
			<div className="flex-1 hidden md:block">
				<ul className="text-center pt-1">
					<li className="inline-block mx-14 font-medium">
						<Link to="/search">Market Place</Link>
					</li>
					<li className="inline-block mx-14 font-medium">
						<Link to="#">Pricing</Link>
					</li>
					<li className="inline-block mx-14 font-medium">
						<a href="#about">About</a>
					</li>
				</ul>
			</div>
			{!token && !respondent && (
				<div className="pt-1 md:ml-0 ml-auto">
					{/* <NavLink
						to="/login"
						className={({ isActive }) =>
							!isActive
								? 'mx-3 bg-blue-500 text-white py-2 px-4 rounded-lg border-2 border-blue-500'
								: 'mx-3 bg-white text-blue-500 py-2 px-4 rounded-lg border-2 border-blue-500'
						}
					>
						Sign In
					</NavLink> */}
					{/* {!home && (
						<NavLink
							to="/sign-up"
							className={({ isActive }) =>
								!isActive && !home
									? 'mx-3 bg-blue-500 text-white py-2 px-4 rounded-lg border-2 border-blue-500'
									: 'mx-3 bg-white text-blue-500 py-2 px-4 rounded-lg border-2 border-blue-500'
							}
						>
							Sign Up
						</NavLink>
					)} */}
				</div>
			)}
		</div>
	);
};

export default NavBar;
