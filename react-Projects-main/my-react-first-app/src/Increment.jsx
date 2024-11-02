import { useState } from "react";

function Increment(){
    const[count,setCount]=useState(0);
    return(<>
    <h1>counter is:{count}</h1>
    <button onClick={()=>setCount(count+1)}>increment</button>
    </>)
}
export default Increment;