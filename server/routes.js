import path from 'path';


const routes = app => {
	app.get('*', (req, res) => res.render("index"));
};

export default routes;
