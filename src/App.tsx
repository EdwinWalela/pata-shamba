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

const App = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/sign-up" element={<RegisterPage />} />
				<Route path="/search" element={<SearchResults />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
