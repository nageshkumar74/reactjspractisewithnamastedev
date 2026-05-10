

import React,{useState,useEffect} from "react"
const LeapYear=()=>{

  const [year,setYear]=useState();

  const [result,setResult]=useState("")

  const getYear=(e)=>{
    setYear(e.target.value);
    console.log(e.target.value)
  }

  const checkLeapYear=()=>{
   let trimmedYear=year.trim();
   console.log(trimmedYear);
   
    if(year %4===0){
        setResult(`${year} is leap year`);
    }
    else {
        setResult(`${year} is not LeapYear`)
    }
  }
    return (
        <div>
        <h1>Leap Year Calculator</h1>
        <label>Enter a Year
            <input type="text" onChange={(e)=>getYear(e)}></input>
            <button className="bg-15" onClick={checkLeapYear}>Check</button>

            <div className="bg-red-12">
            {result}
            </div>
        </label>

        </div>

    )
}
export default LeapYear