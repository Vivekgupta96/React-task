import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const handleClickDec=()=>{
    if(count==0){
      
      return
    }
    setCount(count-1);
  }
  const resetCpunt=()=>setCount(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleClick}>click me increase</button>
      <button onClick={handleClickDec}>click me decrease</button>
      <button onClick={resetCpunt}>reset</button>
    </div>
  );
}

export default App;
