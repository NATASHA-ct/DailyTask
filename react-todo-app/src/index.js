/* eslint-disable react/prop-types */

import React from "react";
import ReactDOM from "react-dom";
// router
import { BrowserRouter} from "react-router-dom";
import TodoContainer from "./components/TodoContainer";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);
