import "./App.css";
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import Links from "./Routes/Links";

const App = () => {
  return (
    <div style={{border:"2px solid red"}}>
      <BrowserRouter>
        <Links/>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
