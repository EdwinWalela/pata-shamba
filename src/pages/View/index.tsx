import PropertyCard from './propertyCard';

const View = (props: any) => {
	return (
		<div className="">
			<PropertyCard data={props.data} />
		</div>
	);
};

export default View;
