import React,{useState} from 'react'

function ZigZag() {

    const [input,setInput]=useState("");
    const [result,setResult]=useState("");

    // const handleResult=(e)=>{
    //     setInput(e.target.value);
    // }
    // const zigZagJoin=(array)=>{

    //   let orignal=array.map((str,i)=>(i%2===0?str:str.split("").reverse().join(""))).join("");

    //   return orignal;

    // } 

    // const handleSubmit=()=>{
    //     if(!input.trim()) return;
        
    //     const array=input.split(",").map((s)=>s.trim());
    //     setResult(zigZagJoin(array));
    // }

     

    const zigZag=(array)=>{


      const orignal=array.map((str,i)=>(i%2===0?str:str.split().reverse().join(""))).join("");

      return orignal;
    }


    
     const handleSubmit=()=>{

      if(!input.trim()) return ;

      const array=input.split("").map((s)=>s.trim());
        setResult(zigZag(array));
    }
  return (
    <div>
      <h1>Zig Zag calculator</h1>
      <input type="text" placeholder='Enter the text' value={input} onChange={(e)=>setInput(e.target.value)}></input>
      <button placeholder="submit" className='bg-red' onClick={handleSubmit}></button>
      {result}
    </div>
  )
}

export default ZigZag
