import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { } from './middlewares';

import App from './containers/lib/App';
import Main from './containers/lib/Main';
import Home from './containers/lib/Home';


export default store => {
	return (
		<Router history={browserHistory}>
			<Route component={App} >
			<Route path='/' component={Home} />
			<Route component={Main}>
			
			</Route>
			</Route>
    </Router>);
};
