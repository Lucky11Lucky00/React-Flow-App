import { useState } from "react";

function Apples()
{
  const [Apples,setApples] = useState(0)
  return(
    <>
    <h1> Number of Apples : {Apples}</h1>
    {Apples ===0 ? (
      <p> No apples left!</p>
    ) : (
      <p>Great! You have some apples...</p>
    )}
<button onClick={()=>setApples( Apples+1)}>Add 1 Apple</button>
<button onClick={()=>Apples>0 && setApples (Apples - 1)}>Remove 1 Apple </button>
<button onClick={()=>setApples(0)}>Reset</button>
    </>
  )
}
export default Apples;