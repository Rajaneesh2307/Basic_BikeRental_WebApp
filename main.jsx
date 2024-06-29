import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Createcontext from "./Context/Createcontext.jsx";
import MyCreateContext from "./Context/MyCreateContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Createcontext>
    <MyCreateContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyCreateContext>
  </Createcontext>
);
