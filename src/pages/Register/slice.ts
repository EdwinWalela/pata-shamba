import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RegisterInitialState, User } from '../../types';
import api from '../../api/auth/index';

const initialState = {
	password: '',
	email: '',
	phone: '',
	isLoading: false,
	hasError: false,
	errorMessage: '',
	registerSuccess: false,
} as RegisterInitialState;

export const registerUser = createAsyncThunk(
	'users/register',
	async (user: User, { rejectWithValue }) => {
		let res;
		try {
			res = await api.register(user);
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
		return res;
	}
);

export const registerSlice = createSlice({
	name: 'register-slice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

export default registerSlice.reducer;
