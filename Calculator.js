import React from 'react'
import { useState } from 'react'

const Calculator = () => {
  const [state, setState]=useState(0);
  const [state1, setState1]=useState(0);
  

const input1=(event)=>{
   setState(Number(event.target.value));
}


const click1=()=>{
  setState1(Number(state1+state));
 }

 const click2=()=>{
  setState1(Number(state1-state));
 }
  return (
    <div  className={"btn btn-success"} style={{alignitem:"center", marginTop:"70px", border:"solid 2px", height:"350px", width:"500px",backgroundColor:"wheat",padding:"50px"}}>
        
        <h3 style={{color:"black"}}>Enter a value to add/substract</h3>
           
           <p style={{color:"black",fontSize:"25px",fontFamily:"serif"}}>
           <span>Input:</span>
           <input type={"text"} onChange={input1} className={"btn btn-success"} style={{backgroundColor:"sienna", marginLeft:"15px"}}/> <br></br>
          </p>


           <p style={{color:"black",fontSize:"25px",fontFamily:"serif"}}>
           <span>Result:</span>
           <input value={state1} className={"btn btn-success"} style={{backgroundColor:"sienna", marginTop:"8px",marginLeft:"9px"}}/><br></br>
           </p>


            <button onClick={click1} className={"btn btn-success"} style={{marginTop:"20px" ,width:"100px", backgroundColor:"brown"}}>
              Add
            </button>

            <button onClick={click2} className={"btn btn-success"} style={{marginTop:"20px" ,width:"100px", backgroundColor:"brown",marginInline:"30px"}}>
              substract
            </button>
           
        
       


    </div>
  )
  }

export default Calculator;