import { useState } from "react";

function Increment()
{
    const [count,setCount]=useState(0)
    const handleclick=()=>{
        setCount (count+1);
    
    }
    return(
        <>
        <h1>This is a counter value:{count}</h1>
        <button style={{color:'green'}}onClick={handleclick}>Increment </button>
        </>
    
    )
}
export default Increment;