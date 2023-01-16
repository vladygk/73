import "./App.css";
import { useState, useEffect } from "react";
function App() {

  const [count, updateCounter] = useState(1);

  useEffect(()=>{
    
   document.title=`Counter: (${count})`;
  },[count]);

  return (
    <div className="App">
      <div>Counter: ({count})</div>
      <button id="c" onClick={()=>updateCounter((count)=>count+1)}>+1</button>
    </div>
  );
}

export default App;
