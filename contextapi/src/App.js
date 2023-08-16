import "./App.css";

import React, { createContext } from "react";
import Child1 from "./comp/Child1";

const data = createContext(); //step-1 creating the context// this need tio export and impoert into rewuired clsss in using usecintextHook

function App() {
 const name1="hello motto"
  //step-2  providing the context api to reuired
  //step-3  using the context api in the child

  return (
    <>
      {/* step-2 finished here */}
      <data.Provider value={name1}>
        <Child1 />
      </data.Provider>
    </>
  );
}

export default App;
export {data}
