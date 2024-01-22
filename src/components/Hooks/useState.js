import React, { useState } from 'react'
import './style.css'

const UseState = () => {

const initialData = 0;

    const [myNum, setMyNum]=useState(initialData);
console.log(myNum);

  return (
   <>
   <div className="center_div">
<p>
  Safdar's Data  : {myNum}
</p>
<div className="button2" onClick={()=>{  setMyNum(myNum + 1)  }}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
   INCREE
</div>
<div className="button2" onClick={()=>(myNum > 0 ? setMyNum(myNum - 1):setMyNum(0)) }>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    DECREE
</div>
   </div>
   
   </>
  )
}

export default UseState