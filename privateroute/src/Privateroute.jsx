import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Privateroute = () => {
  let val = false;

  // if (val) {
  //   return <Outlet />;
  // } else {
  //   return <Navigate to={"/"} />;
  // }

  val ? <Outlet /> : <Navigate to={"/"} />;
};
export default Privateroute;
