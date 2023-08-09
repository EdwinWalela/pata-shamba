import StatBar from './statBar';
import LandListTable from './landListTable';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchPendingLands } from './slice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const DashboardPage = () => {
	const pendingLands = useAppSelector((state) => state.dashboardState.pendingLands);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchPendingLands({}));
	}, []);

	return (
		<div className="p-10">
			<StatBar data={pendingLands} />
			<LandListTable data={pendingLands} />
		</div>
	);
};

export default DashboardPage;
