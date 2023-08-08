import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../pages/Register/slice';
import loginReducer from '../pages/Login/slice';

export const store = configureStore({
	reducer: {
		register: registerReducer,
		login: loginReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
