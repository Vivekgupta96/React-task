import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserdashBord from "./UserdashBord";
import Profile from "./Profile";
import Privateroute from "./Privateroute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserdashBord />} />

        <Route path="/privateroute" element={<Privateroute />}>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
