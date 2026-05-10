import React,{useState} from 'react'

function MutatedataForm() {
  const [data, setData] = useState({

    name:"nagesh",
    age:"22",
    address:{
        city:"hyderbad",
        state:"telangana",
    }
  });
  

//   const handleClick=()=>{
  
    
//     setData((prev)=>{
//      return {
//         ...prev,
        
//         address:{
//             ...prev.address,
//             city:"pune",
//         }
//      }
        

//     })
    

    // const handleClick2=()=>{

    //     setData((prev)=>{

    //     return {
    //         ...prev,
    //         address:{
    //           ...prev.address,
    //           city:"csk",
    //         }
    //     }
    //     })

    const handleClick2=()=>{

      setData((prev)=>{
       return {

        ...prev,
        address:{
          ...prev.address,
          city:"csk"
        }
       }
      })


      }
    
    }
  
  return (
    <div>
      
      <h1>Mutate Data Form</h1>
      
      {data.address.city}
      <input type="text" value={data.name} onChange={(e)=>{setData((prev)=>({...prev,name:e.target.value}))}}></input>
      <button onClick={()=>handleClick2()}>Submit</button>
    </div>
  )
}

export default MutatedataForm
