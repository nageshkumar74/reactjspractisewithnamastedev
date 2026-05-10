



import React,{use, useState} from 'react'

function Guessthenumber() {
  let genrateRandom=()=>Math.floor(Math.random()*100);
    const [number,setNumber]=useState(genrateRandom);
    const [quess,setQuess]=useState("")
    const [count,setCount]=useState(0);
    const [message,setMessage]=useState("");
   
   
    const handleGuess=()=>{

        let num=parseInt(quess);

        setCount(count+1);

        if(isNaN(num) || num<1 || num >100){
            setMessage("Number should between 1 to 100");
        }

        setMessage("");

        if(num===number){

            setMessage(`Congratulation! You guessed the number in ${count} attempts`);
        }
        else if(num<number){
            setMessage("Too low! Try again");
        }
        else {
            setMessage("Too high! Try again")
        }
    }


  const resetButton=()=>{

    setNumber(genrateRandom)
    setCount(0);
    setMessage("");
    setQuess("");
  }
    


    return (
    <div>
      <h1>Guess The Number</h1>
      <input type='text' placeholder='Enter a Number between 1 and 100' value={quess} onChange={(e)=>setQuess(e.target.value)}/>
      <button onClick={handleGuess} >Guess the Number</button>
      <button onClick={resetButton}> Reset</button>

      {message && (
        <span>{message}</span>
      )}
    </div>
  )
}

export default Guessthenumber;
