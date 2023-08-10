import StatBar from './statBar';
import LandListTable from './landListTable';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchPendingLands } from './slice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchAllLands } from '../Landing/slice';

const DashboardPage = () => {
	const pendingLands = useAppSelector((state) => state.dashboardState.pendingLands);
	const allLands = useAppSelector((state) => state.landingState.allLands);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchAllLands({}));
		dispatch(fetchPendingLands({}));
	}, []);

	return (
		<div className="p-10">
			<StatBar data={allLands} />
			<LandListTable data={pendingLands} />
		</div>
	);
};

export default DashboardPage;
