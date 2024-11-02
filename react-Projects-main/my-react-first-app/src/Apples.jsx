import { useState } from "react";

function Apples(){
    const[count,setCount]=useState(0)
    return (<><h1>you have apples:{count}</h1>
  {count==0?<p>you have no apples left</p>:(<p>great you have some apples</p>)}
  <button onClick={()=>setCount(count+1)}>Add 1 apple</button>
  <button onClick={()=>count > 0 && setCount(count-1)}>remove apple</button>
  <button onClick={()=>setCount(0)}>reset</button>
    </>)
  }
  export default Apples;