import React, { useContext } from "react";
import {data} from '../App'

const Child3 = () => {
  const res = useContext(data);
  return (
    <>
      <div>
        <h1>Insie the child 3 {res}</h1>
       
      </div>
    </>
  );
};

export default Child3;
