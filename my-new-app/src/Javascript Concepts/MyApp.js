import React, { useEffect, useState } from 'react'

export const MyApp = () => {
  const [first, setfirst] = useState();
  const [data,setData]= useState("");
  const handleClick=()=>
  {
    alert("Hello Hello")
  }
  useEffect(() => {
      console.log("Hello");
      console.log(data);
    },[data])
    
  return (
    <div>
      <button onClick={handleClick}>Hello Counter</button>
       </div>
  )
}
