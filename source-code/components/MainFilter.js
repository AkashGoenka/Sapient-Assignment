import React from 'react';
import FilterGrid from './FilterGrid';

export default props => {
	return (
		<div className="filter-outer">
			<h2>Filters</h2>
			<FilterGrid gridHeader="Launch Year" type="yearsList" queryParam={props.searchParam}/>
			<FilterGrid gridHeader="Successfull Launch" type="boolValues" identifier="launch" queryParam={props.searchParam}/>
			<FilterGrid gridHeader="Successfull Landing" type="boolValues" identifier="land" queryParam={props.searchParam}/>
		</div>
	);
}
