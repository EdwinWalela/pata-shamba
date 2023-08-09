import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { LandingInitialState, User } from '../../types';
import api from '../../api/lands/index';

const initialState = {
	searchLocation: '',
	searchPrice: 0,
	isLoading: false,
	hasError: false,
	errorMessage: '',
	topPicks: [],
	searchResults: [],
} as LandingInitialState;

export const fetchTopPicks = createAsyncThunk('landing/lands', async ({}, { rejectWithValue }) => {
	let res;
	try {
		res = await api.fetchAllLands();
		//TODO: filter lands to pick only 3
	} catch (error: any) {
		return rejectWithValue(error.message);
	}
	return res;
});

export const searchLands = createAsyncThunk(
	'landing/search-lands',
	async (payload: { price: number; location: string }, { rejectWithValue }) => {
		let res;
		try {
			res = await api.searchLands(payload.price, payload.location);
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
		return res;
	}
);

export const landingSlice = createSlice({
	name: 'landing-slice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchTopPicks.pending, (state, action) => {
			state.isLoading = true;
			state.hasError = false;
			state.errorMessage = '';
		});
		builder.addCase(fetchTopPicks.fulfilled, (state, action) => {
			state.isLoading = false;
			state.hasError = false;
			state.errorMessage = '';
		});
		builder.addCase(fetchTopPicks.rejected, (state, action) => {
			state.isLoading = false;
			state.hasError = true;
			state.errorMessage = '';
		});

		builder.addCase(searchLands.pending, (state, action) => {
			state.isLoading = true;
			state.hasError = false;
			state.errorMessage = '';
		});
		builder.addCase(searchLands.fulfilled, (state, action) => {
			state.isLoading = false;
			state.hasError = false;
			state.errorMessage = '';
		});
		builder.addCase(searchLands.rejected, (state, action) => {
			state.isLoading = false;
			state.hasError = true;
			state.errorMessage = '';
		});
	},
});

export default landingSlice.reducer;
