import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { DashboardInitialState, User } from '../../types';
import api from '../../api/lands/index';

const initialState = {
	pendingLands: [],
} as DashboardInitialState;

export const fetchPendingLands = createAsyncThunk(
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

export const approveLand = createAsyncThunk(
	'landing/approve',
	async (payload: { id: string }, { rejectWithValue }) => {
		let res;
		try {
			res = await api.approveLand(payload.id);
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
		return res.data;
	}
);

export const DashboardSlice = createSlice({
	name: 'landing-slice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPendingLands.fulfilled, (state, action) => {
			let lands = action.payload.slice(0, 4).filter((land: any) => land.status == 'false');
			state.pendingLands = lands;
		});
		builder.addCase(fetchPendingLands.rejected, (state, action) => {});
	},
});

export default DashboardSlice.reducer;
