import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import Nav from './Components/Navbar';  // Correct import location
import Links from "./Routes/Links";

const App = () => {
  return (
    <div style={{border:"2px solid red"}}>
      <BrowserRouter>
        <Nav/>
        <Links/>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
