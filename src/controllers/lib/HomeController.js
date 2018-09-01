import { Navigator } from '../../helper';

export class HomeController {

	constructor({callback, getState, getProps, router}) {
		this.callback = callback;
		this.getState = getState;
		this.getProps = getProps;
	}
}
