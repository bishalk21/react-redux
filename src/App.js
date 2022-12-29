
import { useState } from 'react';
import './App.css';
import { Buttons } from './component/Buttons';
import { Display } from './component/Display';


function App() {

  // without redux 
  // no props drilling
  // const [counter, setCounter] = useState(0)

  // const OnButtonClick = operator => {
  //    operator === "+" ? setCounter(counter + 1) : setCounter(counter - 1)
  // }

  return (
    <div className="App">
    <Display  />
    <br />
    {/* <Buttons setCounter={setCounter} /> */}
    <Buttons  />
    </div>
  );
}

export default App;
