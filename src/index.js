import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-116415115-1');
ReactGA.pageview(window.location.href);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
