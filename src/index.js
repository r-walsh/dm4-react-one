import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

document.addEventListener( "DOMContentLoaded", () => {
	const reactNode = document.getElementById( "react-node" );

	ReactDOM.render( <App />, reactNode );
} );
