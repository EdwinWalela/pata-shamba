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
	},
});

export default landingSlice.reducer;
