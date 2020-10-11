import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import SpaceXList from './SpaceXList';

class App extends React.Component{

	render(){
		return (
			<BrowserRouter>
			<Switch>
				<Route path="/" component={SpaceXList}/>
				<Route path="/:queryParams" component={SpaceXList}/>
			</Switch>
			</BrowserRouter>
		);
	}
}

export default App;