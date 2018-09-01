import { Navigator } from "../../helper";

export class MainController {

	constructor({ callback, getState, getProps, setAuth, router }) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;
	}
}
