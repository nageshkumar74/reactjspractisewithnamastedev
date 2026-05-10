import React,{useState,useEffect} from 'react'

function ErrorHandle() {
    const [data,setData]=useState([]);
    const [error,setError]=useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((data)=>setData(data)).catch((error)=>setError(error.message))

    },[])
  return (
    <div>
      {error && <p>{error}</p>}
      {data.map((item)=><p key={item.id}>{item.title}</p>)}
    </div>
  )
}

export default ErrorHandle;
