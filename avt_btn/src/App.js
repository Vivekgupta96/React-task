import Button from './component/Button';
import Avtar from './component/avtar';
import './App.css';


function App() {
  return (

    <div className="App">

      <h1>Hellow world</h1>
      <Avtar 
      pic="https://imgs.search.brave.com/ikERkB6gSAmZEO8MWa3wZjx88zjZCGkyxLR7PAl1wjk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/YW5pbWFsc3NhbGUu/Y29tL3VwbG9hZHMv/NDAweDQwMC81MDk4/M2Q4NDFkMmI2ODIx/YzkzYTZkNThmMmIz/MDc0ZmJhOTYuanBn/P3Y3"
      name="Puppy"
      round="true"
      />
      <Avtar 
      pic="https://imgs.search.brave.com/ikERkB6gSAmZEO8MWa3wZjx88zjZCGkyxLR7PAl1wjk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/YW5pbWFsc3NhbGUu/Y29tL3VwbG9hZHMv/NDAweDQwMC81MDk4/M2Q4NDFkMmI2ODIx/YzkzYTZkNThmMmIz/MDc0ZmJhOTYuanBn/P3Y3"
      name="Puppy"
      />
     
     <Button text="Click me" width="100px" />
    
  
    </div>
  );
}

export default App;
