import './App.css';
import DashboardPage from './pages/Dashboard';
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/Notfound';
import NavBar from './layout/Navbar';
import Footer from './layout/Footer';
import SearchResults from './pages/SearchResults';
import View from './pages/View';

const App = () => {
	const properties = [
		{
			price: '250,000',
			title:
				'Rectangular, slightly sloppy plot with a perimeter wall. Electricity and water services available. This plot comes with two old bungalows Electricity and water connected to this property There is a borehole on this property A perimeter wall surrounds the plot The access road is a tarmac road It is a leasehold property with a term of 50 years from 2010',
			location: 'Namanga Rd, Kitengela',
			size: 3,
		},
	];
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/sign-up" element={<RegisterPage />} />
				<Route path="/search" element={<SearchResults />} />
				<Route path="/view/:id" element={<View data={properties[0]} />} />
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
