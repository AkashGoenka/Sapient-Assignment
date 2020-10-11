import React from 'react';
import RocketCard from './RocketCard';

export default props => {
	const rocketList = props.data.map(rec => {
		return <RocketCard key={rec.flight_number} info={rec}/>
	});
return <div className="rocket-grid">{rocketList}</div>;
}