import { useState, useEffect } from "react";

//let counter;

export function CounterComponent() {
  /* function updateCounter(counter){
        return ++counter;
    }*/

  const [count,updateCounter] = useState(1);

  useEffect(()=>{
    
   document.title=`Counter: (${count})`;
  },[count]);
  return (
    <div>
      <div>Counter: ({count})</div>
      <button id="c" onClick={()=>updateCounter((count)=>count+1)}>+1</button>
    </div>
  );
}
