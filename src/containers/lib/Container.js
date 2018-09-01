import { Component } from "react";

export class Container extends Component {

	constructor(props) {
		super(props);

		this.callback = this.callback.bind(this);
		this.getState = this.getState.bind(this);
		this.getProps = this.getProps.bind(this);
		this.auth = this.auth.bind(this);
	}
	auth(auth) {
		this.setState({ auth });
	}
	callback(state) {
		this.setState({ ...state });
	}
	getState() {
		return this.state;
	}
	getProps() {
		return this.props;
	}

}
