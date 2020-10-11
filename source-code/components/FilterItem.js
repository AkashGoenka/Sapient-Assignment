import React from 'react';
import {Link} from 'react-router-dom';

export default props => {
	return(
		<Link to={props.queryParam}><div className="filter-item">{props.value}</div></Link>
	)
	
}