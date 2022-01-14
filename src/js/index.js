//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "bootstrap";

//import your own components
import App from "./App";

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
