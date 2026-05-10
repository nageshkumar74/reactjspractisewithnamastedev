import React,{useState} from 'react'

function WordOmiiter() {
const [inputwords,setInputWord]=useState("")
const [omitword,setOmitWords]=useState(true);
const OMITTED_WORDS = ["a", "the", "and", "or", "but"];
const handleInputChange=(e)=>{
 setInputWord(e.target.value);
}
const toggleOmitword=()=>{
    setOmitWords(!omitword);
}

const getProceedText=()=>{

    if(!inputwords) return "";
    if(!omitword) return inputwords;


    // const newWord=inputwords.split(" ").filter((item)=>!OMITTED_WORDS.includes(item)).join(" ");
        const newWord=inputwords.split(" ").filter((item)=>!OMITTED_WORDS.includes(item)).join(" ");
    console.log(newWord);
    return newWord;

}
const clearField=()=>{
    setInputWord("");
}

return (
    <div>
  <h1>
    WordOmmiter  
  </h1>
  <div>
    <textarea placeholder='Enter the text here' value={inputwords} onChange={handleInputChange}></textarea>
    <div>
        <button onClick={toggleOmitword}>{omitword ?"show all word":"Omit word"}</button>
        <button onClick={clearField}>Clear</button>
        </div> 
        <div>
            <h2>Output</h2>
            <p>{getProceedText()}</p>
            </div>
  </div>
    </div>
  )
}

export default WordOmiiter;
