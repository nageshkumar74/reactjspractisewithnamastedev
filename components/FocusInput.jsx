import React,{useRef} from 'react'


function FocusInput() {
    const inputRef=useRef(null);

    const focusHandle=()=>{

        inputRef.current.focus();
    }
  return (
    <div>
     <h1>Focus Input</h1>   
     <input type="text" placeholder ="enter something" ref={inputRef}></input>
     <button type="button" placeholder="focus input" onClick={focusHandle}></button>
    </div>
  )
}

export default FocusInput;
