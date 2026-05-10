


import React,{useState} from 'react';


function Mutate(){
    
    const [userdata,setuserData]=useState({
        name:"nagesh",
        address:{
            city:"pune",
            pincode:"411044"
        }
    })

        const changeCity=(e)=>{
        setuserData({
            ...userdata,
            address:{
                ...userdata.address,
                city:e.target.value
            }
        })
                 
    }
    return (
        <div>
           
        <input type="text" value={userdata.address.city} onChange={changeCity}></input>
        <h1>{userdata.address.city}</h1>
        </div>
    )
}
export default Mutate;