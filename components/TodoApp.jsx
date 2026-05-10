

import { useState } from "react";


function TodoApp(){
  const [item,setItem]=useState("");
  const [todo,setTodo]=useState([]);


  const handleSubmit=()=>{

    const trimmedValue=item.trim();
    if(trimmedValue===""){
        return 
    }
    setTodo((prev)=>[...prev,trimmedValue]);
    
    setItem("");
  }

  
    return(
        <div>
        <h1>Item List</h1>
      <input type="text" value={item} placeholder="Enter the text" onChange={(e)=>setItem(e.target.value)}></input>
        <ul>{
            
            
             todo.map((item,index)=>(
                <li key={index}>{item}</li>
             ))
            
            }</ul>
        <button onClick={handleSubmit}></button>    
        </div>
    )
}
export default TodoApp;