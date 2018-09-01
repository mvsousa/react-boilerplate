export class Navigator {
	constructor(router) {
		this.router = router;
	}

	navigateTo(address) {
		this.router.push(address);
	}
}