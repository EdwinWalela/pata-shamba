import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { LandDetailInitialState } from '../../types';
import api from '../../api/lands/index';

const initialState = {
	location: '',
	description: '',
	size: '',
	phone: '',
	price: '',
	rate: '',
	isLoading: false,
} as LandDetailInitialState;

export const fetchLandById = createAsyncThunk(
	'landdetail/get',
	async (payload: { id: string | undefined }, { rejectWithValue }) => {
		let res;
		try {
			res = await api.fetchLandById(payload.id);
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
		return res.data;
	}
);

export const landDetailSlice = createSlice({
	name: 'landdetail-slice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchLandById.pending, (state, action) => {
			state.isLoading = true;
			console.log(action.payload);
		});
		builder.addCase(fetchLandById.fulfilled, (state, action) => {
			state.isLoading = false;
			state.description = action.payload.description;
			state.location = action.payload.land.location.county;
			state.description = action.payload.land.description;
			state.price = action.payload.land.price;
			state.phone = action.payload.phone;
		});
		builder.addCase(fetchLandById.rejected, (state, action) => {
			state.isLoading = false;
		});
	},
});

export default landDetailSlice.reducer;
