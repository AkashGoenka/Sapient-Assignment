import React from 'react';
import FilterItem from './FilterItem';

export default props => {
	const items = [];
	if(props.type === "yearsList"){
		for(let i=2006;i<2021;i++) {
			items.push(<FilterItem key={i} value={i} queryParam={`filter?launch_year=${i}`}/>);
		}
	}
	else if(props.type === "boolValues"){
		items.push(<FilterItem key={`${props.gridHeader}_true`} value="True" queryParam={`filter?success_${props.identifier}=true`}/>);
		items.push(<FilterItem key={`${props.gridHeader}_false`} value="False" queryParam={`filter?success_${props.identifier}=false`}/>);
	}
	return (
		<div className="filter-section">
			<p>{props.gridHeader}</p>
			<div className="filter-grid">
				{items}
			</div>
		</div>
	);
}