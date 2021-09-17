import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Website from "./Website";

ReactDOM.render(
  <BrowserRouter>
    <Website />
  </BrowserRouter>,
  document.getElementById("root")
);
