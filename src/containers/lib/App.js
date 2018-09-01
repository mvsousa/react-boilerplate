import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

	componentDidMount() {
	}

	render() {
		return this.props.children;
	}
}

export default connect(null, {})(App);
