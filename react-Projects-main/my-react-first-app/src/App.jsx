// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

import Apples from "./Apples";
import Counter from "./Counter";
import Increment from "./Increment";
import Prices from "./prices";
import Score from "./Score";

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vitejs.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App
// function  App(){
//   return (<h1>hello</h1>)
// }
// export default App;

// function App(){
//   const items=[{id:1,name:"carrot",isVeg:true},
//     {id:2,name:"chicken",isVeg:false},
//     {id:3,name:"potato",isVeg:true},
//     {id:4,name:"mutton",isVeg:false}
//   ];
//   const vegItems=items.filter(item=>item.isVeg);
//   const vi=vegItems.map((item=>(<li key={item.id} style={{color:'green'}}>id:{item.id},name:{item.name}</li>)));
//   const nonVeg=items.filter(item=>!item.isVeg);
//   const nv=nonVeg.map((item=>(<li key={item.id} style={{color:'red'}}>id:{item.id},name:{item.name}</li>)));
//   return (<><h1>veg items</h1>
//    <ol>{vi}</ol>
  
//    <h1> NV items</h1>
//    <ol>{nv}</ol>
//   </>)
// }

// export default App;


function App(){
return(<><Prices/>
<Apples/>
<Score/>
<Increment/>
<Counter/>
</>)
}

export default App;