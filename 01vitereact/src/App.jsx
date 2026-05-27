// import Header from "./Header"
// function App() {
//   return (
//     <div>
//       <h1>Hello my friend!!!!!!</h1>
//       <h1>My name is Ishan Sinha</h1>
//       <Header />
//     </div>
//   )
// }
// export default App

//**************************State and hooks********************************
// import { useState } from "react";
// import Counter from "./counter";
// function App(){
//   const[fruit,setFruit]=useState("mango");
//   const handleClick=()=>{
//     setFruit("banana");
//   }
//   return(
//     <div>
//       <h1>which fruit you like the most?</h1>
//       <p>{fruit}</p>
//       <button onClick={handleClick}>Change Fruit</button>
//       <Counter/>
//     </div>
//   )
// }
// export default App;

//************************* toggle ***************************************
import { useState } from "react";
function App(){
  const[display,setDisplay]=useState(true);
  return(
    <div>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      {
        display ? <h1>Toggle Example</h1> : null
      }
      
      </div>
  )
}
export default App;