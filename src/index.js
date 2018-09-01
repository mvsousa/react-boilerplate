import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Routes from "./routes";
import Reducers from "./reducers/index";

const store = createStore(Reducers);

ReactDom.render(
	<Provider store={store}>
		{ Routes(store) }
	</Provider>,
	document.querySelector("[app-container]")
);