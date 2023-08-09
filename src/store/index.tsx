import { configureStore } from '@reduxjs/toolkit';
import landingReducer from '../pages/Landing/slice';
import loginReducer from '../pages/Login/slice';

export const store = configureStore({
	reducer: {
		landingState: landingReducer,
		login: loginReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
