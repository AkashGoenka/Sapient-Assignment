import React from 'react';

export default props => {
	return(
		<div className="rocket-item">
			<img src={props.info.links.mission_patch_small} alt={props.info.mission_name}/>
			<div className="details">
				<p className="heading">{props.info.mission_name} #{props.info.flight_number}</p>
				<p><span className="label">Mission Ids:</span></p>
				<ul>
						<li>{props.info.mission_id.length === 0?'NA':props.info.mission_id[0]}</li>
				</ul>
				<p><span className="label">Launch Year:</span> {props.info.launch_year}</p>
				<p><span className="label">Successfull Launch:</span> {props.info.launch_success ?'true':'false'}</p>
				<p><span className="label">Successfull Landing:</span> {props.info.rocket.first_stage.cores[0].land_success ? 'true':'false'}</p>
			</div>
		</div>
	)
}