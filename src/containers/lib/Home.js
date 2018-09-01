import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from './Container';
import { HomeController } from '../../controllers';
import { Header, LoginForm } from '../../components';

class Home extends Container {
	constructor(props) {
		super(props);

		this.state = {
		};

		const toController = {
			callback: this.callback,
			getState: this.getState,
			getProps: this.getProps,
			router: props.router
		};

		this.controller = new HomeController(toController);
	}

	componentDidMount() {
	}

	componentWillReceiveProps(nextProps) {
	}

	componentDidUpdate() {
	}
	render() {
		return (
    	<div className='home'>
				<h2>Welcome To Marcos React Boilerplate</h2>
			</div>
		);
	}
}

const mstp = state => {
	return {}
};

export default connect(mstp, {})(Home);
