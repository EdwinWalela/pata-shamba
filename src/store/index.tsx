import { configureStore } from '@reduxjs/toolkit';
import landingReducer from '../pages/Landing/slice';
import loginReducer from '../pages/Login/slice';
import landDetailReducer from '../pages/View/slice';
import dashboardReducer from '../pages/Dashboard/slice';

export const store = configureStore({
	reducer: {
		landingState: landingReducer,
		login: loginReducer,
		landDetail: landDetailReducer,
		dashboardState: dashboardReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
