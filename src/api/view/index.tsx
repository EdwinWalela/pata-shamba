import axios from 'axios';
import type { User } from '../../types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const fetchAllLands = async () => {
	let response;
	try {
		response = await axios.get(`${BASE_URL}/lands`);
	} catch (error: any) {
		throw new Error(`Failed to fetch lands. Please try again `);
	}
	return response.data;
};

const searchLands = async (price: number, location: string) => {
	let response;
	try {
		response = await axios.get(`${BASE_URL}/lands?price=${price}&location=${location}`);
	} catch (error: any) {
		throw new Error(`Failed to fetch lands. Please try again `);
	}
	return response.data;
};

export default {
	fetchAllLands,
	searchLands,
};
