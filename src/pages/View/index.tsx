import PropertyCard from './propertyCard';

const View = (props: any) => {
	return (
		<div className="bg-gray-200">
			{' '}
			<PropertyCard data={props.data} />{' '}
		</div>
	);
};

export default View;
