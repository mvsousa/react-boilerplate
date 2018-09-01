import express from "express";
import path from "path";

import routes from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "../public/")));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

const port = process.env.PORT_DASH || "8081";

routes(app);

app.listen(port, (err) => {
	if(err) {
		console.log(err);
	} else {
		console.log(`Server online - Listening to port ${port}`);
	}
});
