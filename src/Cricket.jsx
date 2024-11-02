import { useState } from "react";

function Cricket()
{
  const [score,setscore] = useState(0)
  return(
    <>
    <h1> Cricket Score : {score}</h1>
    <button style={{color:'green'}}onClick={()=>setscore(score+1)}>increment+1</button>
    <button style={{color:'Blue'}}onClick={()=>setscore(score+2)}>increment+2</button>
    <button style={{color:'Orange'}}onClick={()=>setscore(score+3)}>increment+3</button>
    <button style={{color:'violet'}}onClick={()=>setscore(score+4)}>increment+4</button>
    <button style={{color:'pink'}}onClick={()=>setscore(score+6)}>increment+6</button>
   <button onClick={()=>setscore(0)}>Reset</button>
    </>
  )
}
export default Cricket;