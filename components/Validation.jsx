

import { useState } from "react";

const Validation =()=>{
const [userName,setUserName]=useState('');
const [location,setLocation]=useState('');
const [error,setError]=useState({userName:false,location:false});
const [sucessMessage,setSucessMessage]=useState('');


const handleSubmit=(e)=>{
    e.preventDefault();
    const newError={
        userName:userName.trim()==='',
        location:location.trim()===''
    } 
     setError(newError);
    if(!newError.userName && !newError.location){
        setSucessMessage(`Your data Submitted sucessfully UserName : ${userName} \n Location : ${location}`);
     
    }
    else {
    setSucessMessage("");
    }
  

}
    return (
        <>
        <form onSubmit={handleSubmit}>
         <h1>Absterik Validation</h1>
         <input type="text" value={userName} placeholder="Enter your Name" onChange={(e)=>setUserName(e.target.value)}/>
         {error.userName &&(
            <>
            <span className="text-red">Name is Required</span>
            </>
         )} 

         <input type="text" value={location} placeholder="Enter your Location" onChange={(e)=>setLocation(e.target.value)}></input>
         {error.location && (
            <>
            <span className="text-red">Location is Required</span>
            </>
         )}

        
         <button>Submit</button>
         {sucessMessage && (
           
          <h3>{sucessMessage}</h3>
           
         )}
        </form>
        </>
    )
}
export default Validation;