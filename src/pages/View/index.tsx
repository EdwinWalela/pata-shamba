import { useEffect } from 'react';
import PropertyCard from './propertyCard';

const View = (props: any) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="bg-gray-200 h-screen">
			<PropertyCard data={props.data} />{' '}
		</div>
	);
};

export default View;
