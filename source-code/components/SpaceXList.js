import React from 'react';
import MainFilter from './MainFilter';
import axios from 'axios';
import RocketList from './RocketList';
import { withRouter } from 'react-router-dom';
import '../css/filter-style.css';

class SpaceXList extends React.Component{

	state = {records:[],loaded:false};

	componentDidMount(){
		this.makeApiCall(this.props.history.location.search.replace('?',''));
	}
	
	makeApiCall = async (params) => {
		const result = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100${params}`,{
			params:{}
		});
		this.setState({records:result.data,loaded:true});
	}
	
	checkForUrlChange(){
		this.props.history.listen(location => {
			this.makeApiCall(`&${location.search.replace('?','')}`)
		});
	}

	render(){
		this.checkForUrlChange();
		if(this.state.loaded){
			return(
				<>
				<h1>SpaceX Launch Programs</h1>
				<div className="container">
					<MainFilter searchParam={this.props.history.location.search} />
					<div className="gap"></div>
					<RocketList data={this.state.records} />
				</div>
				<footer>
					<p>Developed by:</p>
					<p>Akash Goenka</p>
				</footer>
				</>
			)
		}
		else{	
			return null;
		}
	}

}

export default withRouter(SpaceXList);