import StatBar from './statBar';
import LandListTable from './landListTable';
import { useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const DashboardPage = () => {
	const token = useAppSelector((state) => state.login.token);
	const navigate = useNavigate();
	useEffect(() => {
		// if (!token) {
		// 	navigate('/login', { replace: true });
		// }
	}, []);
	const properties = [
		{
			price: '250,000',
			title:
				'Rectangular, slightly sloppy plot with a perimeter wall. Electricity and water services available. This plot comes with two old bungalows Electricity and water connected to this property There is a borehole on this property A perimeter wall surrounds the plot The access road is a tarmac road It is a leasehold property with a term of 50 years from 2010',
			location: 'Namanga Rd, Kitengela',
			size: 3,
		},
		// {
		// 	price: '250,000',
		// 	title:
		// 		'Rectangular, slightly sloppy plot with a perimeter wall. Electricity and water services available. This plot comes with two old bungalows Electricity and water connected to this property There is a borehole on this property A perimeter wall surrounds the plot The access road is a tarmac road It is a leasehold property with a term of 50 years from 2010',
		// 	location: 'Namanga Rd, Kitengela',
		// 	size: 3,
		// },
	];
	return (
		<div className="p-10">
			<StatBar />
			<LandListTable data={properties} />
		</div>
	);
};

export default DashboardPage;
