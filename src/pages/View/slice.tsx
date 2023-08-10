import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { LandDetailInitialState } from '../../types';
import api from '../../api/lands/index';

const initialState = {
	land: {
		location: '',
		size: '',
		description: '',
		price: '',
		rate: '',
		id: 0,
		isLoading: false,
	},
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
		});
		builder.addCase(fetchLandById.fulfilled, (state, action) => {
			state.isLoading = false;
			state.land.description = action.payload.land.description;
			state.land.location =
				action.payload.land.location.ward + ',' + action.payload.land.location.county;
			state.land.price = action.payload.land.price;
			state.land.size = action.payload.land.size;
			state.land.ownerPhone = action.payload.phone;
			state.land.ownerName = action.payload.ownerName;
		});
		builder.addCase(fetchLandById.rejected, (state, action) => {
			state.isLoading = false;
		});
	},
});

export default landDetailSlice.reducer;
