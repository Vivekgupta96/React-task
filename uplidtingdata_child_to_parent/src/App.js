import logo from "./logo.svg";
import "./App.css";
import Child1 from "./Child1";

const getData = (rcvd) => {
  console.log(rcvd);
};
function App() {
  return (
    <>
      <Child1 value={getData} />
    </>
  );
}

export default App;
