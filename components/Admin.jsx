import React,{useState,useEffect} from "react";


function Admin(){

    const [user,setUser]=useState([]);
    const [search,setSearch]=useState("");

    useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json()).then((data)=>setUser(data)).catch((err)=>console.log(err))
    },[])
   const filterword=user.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <>
        <input type="text" placeholder="search" onChange={(e)=>setSearch(e.target.value)}></input>
        {
            filterword.map((item)=>(
                <p key={item.id}>{item.name}</p>
            ))
        }
        </>
    )
}
export default Admin;