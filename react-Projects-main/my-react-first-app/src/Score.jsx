import { useState } from "react";

function Score(){
      const [count,setCount]=useState(0)
      const single=()=>{
        setCount(count+1);
     }
        return (<><h1>score:{count}</h1>
        <button onClick={single}>+1</button>
        <button onClick={()=>setCount(count+2)}>+2</button>
        <button onClick={()=>setCount(count+3)}>+3</button>
        <button onClick={()=>setCount(count+4)}>+4</button>
        <button onClick={()=>setCount(count+6)}>+6</button>
       <button onClick={()=>setCount(count-count)}>Reset</button>
       </>)
      }
    export default Score;