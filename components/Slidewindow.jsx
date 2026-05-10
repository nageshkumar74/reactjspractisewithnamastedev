import React,{useState} from 'react'

const Slidewindow=({data})=>{

    const [index,setIndex]=useState(0);

    const handlerestart=()=>{
        setIndex(0);
    }

    const handlePrev=()=>{
        setIndex(prev=>(prev>0 ? prev-1:prev));
    }

    const handleNext=()=>{
        setIndex(prev=>(prev<data.length-1?prev+1:prev));
    }

    return (
        <div>

            <button onClick={handlerestart} disabled={index===0}>Restart</button>
            <button onClick={handlePrev} disabled={index===0}>Prev</button>
            <button onClick={handleNext} disabled={index===data.length-1}>Next</button>
r
            <div>
                <h1>{data[index].title}</h1>
                <h1>{data[index].text}</h1>
            </div>

        </div>
    )
}

export default Slidewindow;