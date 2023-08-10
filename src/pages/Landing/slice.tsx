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
	allLands: [],
} as LandingInitialState;

export const fetchTopPicks = createAsyncThunk(
	'landing/lands',
	async (payload: {}, { rejectWithValue }) => {
		let res;
		try {
			res = await api.fetchAllLands();
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
		return res.data;
	}
);

export const fetchAllLands = createAsyncThunk(
	'landing/lands-all',
	async (payload: {}, { rejectWithValue }) => {
		let res;
		try {
			res = await api.fetchAllLands();
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
		return res.data;
	}
);

export const searchLands = createAsyncThunk(
	'landing/search-land',
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
			let lands = action.payload.slice(0, 4).filter((land: any) => land.status == 'true');

			state.topPicks = lands;
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

		builder.addCase(fetchAllLands.pending, (state, action) => {
			state.isLoading = true;
			state.hasError = false;
			state.errorMessage = '';
		});
		builder.addCase(fetchAllLands.fulfilled, (state, action) => {
			state.isLoading = false;
			state.hasError = false;
			state.errorMessage = '';
			let lands = action.payload;

			state.allLands = lands;
		});
		builder.addCase(fetchAllLands.rejected, (state, action) => {
			state.isLoading = false;
			state.hasError = true;
			state.errorMessage = '';
		});
	},
});

export default landingSlice.reducer;
