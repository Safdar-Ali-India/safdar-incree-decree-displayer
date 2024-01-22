import React, { useState,useEffect } from 'react'
import './style.css'

const UseEffect = () => {

const initialData = 0;

    const [myNum, setMyNum]=useState(initialData);
console.log(myNum);
useEffect(() => {
  document.title = `Chats (${myNum})`
console.log("hii");
   
} )


  return (
   <>
   <div className="center_div" style={{textAlign:'center', justifyContent:'center'}}>
<p>
  WhatsApp Notification  : {myNum}
</p>
<div className="button2" onClick={()=>{  setMyNum(myNum + 1)  }} >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
   INCREE
</div>
 
   </div>
   
   </>
  )
}

export default UseEffect