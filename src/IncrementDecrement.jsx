import { useState } from "react";

function IncrementDecrement()
{
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount (count+1);
    }
    const Decrement=()=>{
        setCount (count-1);
    }
    return(
        <>
        <h1>this is counter value:{count}</h1>
        <button style={{color:'pink'}}onClick={increment}>Increment</button>
        <button style={{color:'blue'}}onClick={Decrement}>Decrement</button>
        </>
    )
}
export default IncrementDecrement;