// import { useState } from "react";


// function AgeCalcucator(){

//     const [date,setDate]=useState('');
//     const [age,setAge]=useState(null);
//     const [error,setError]=useState("");

//     const calculate=()=>{
     
//         setError("");
//         if(!date){
//             setError("Enter a proper date in format");
//             return;
//         }
//         let  currentDate=new Date();
//         let  birthDate=new Date(date);

//         if(birthDate>currentDate){
//             setError("Age should not in future");
//             setAge(null);
//             return;
//         }

//         let  year=currentDate.getFullYear()-birthDate.getFullYear();
//         let month=currentDate.getMonth()-birthDate.getMonth();
//         let  day=currentDate.getDate()-birthDate.getDate();
//         if(day <0){
//             month-=1;
//             day+=new Date(currentDate.getFullYear(),currentDate.getMonth(),0).getDate();
//         } 
//         if(month<0){
//             year-=1;
//             month+=12;
//         }
//         setAge({year,month,day})
        
//     }
// return (
//     <>
//     <h1>AgeCalculator</h1>
//     <input type="date" placeholder="dd-mm-yyyy" value={date} onChange={(e)=>setDate(e.target.value)}></input>
//     <button type="button" placeholder="calculate Age" onClick={calculate}></button>

//     {error && (
//         <p>{error}</p>
//     )}
//     { age && (
//         <div>
//             <p>
//                 {age.year} years {age.month} month {age.day} days
//             </p>
//         </div>
//     )
//     }
// </>
// )

// }

// export default AgeCalcucator;


// import React,{useState} from "react";


// function AgeCalcucator(){
// const [bod,setBod]=useState('');
// const [error,setError]=useState("");
// const [age,setAge]=useState(null);


// const handleCalculate=()=>{
//     setError('')
//     if(!bod){
//        setError("Enter valid date format");
//     }
//     const currentDate=new Date();
//     const birthdate=new Date(bod);

//     let  year=currentDate.getFullYear()-birthdate.getFullYear();
//     let month=currentDate.getMonth()-birthdate.getMonth();
//     let day=currentDate.getDate()-birthdate.getDate();

//     if(birthdate>currentDate){
//         setError("Birthdate not in future");
//     }
//      if(day <0){

//        month-=1;
//        day+=new Date(currentDate.getFullYear(),getMonth()).getDate();
//      }
//     if(month<0){
//         year-=1;
//         month=+12;
//     }
//      setAge({year,month,day});

// }

//     return (
//         <>
//         <div>
//             <input type="date" placeholder="dd-mm-yyyy" value={bod} onChange={(e)=>setBod(e.target.value)}></input>
//             <button onClick={handleCalculate}>Calculate Age</button>
//              {
//                 error && (
//                     <p>{error}</p>
//                 )
//              }
//            {
//             age && (
//                 <p>

//                     Year :{age.year} Month:{age.month} Day:{age.day}
//                 </p>
//             )
//            }
//         </div>
//         </>
//     )
// }
// export default AgeCalcucator;


import React,{useState} from "react";
function AgeCalculator(){
    const [date,setDate]=useState('');
    const [age,setAge]=useState(null);
    const [error,setError]=useState(false);



   const calculateAge=()=>{

    setError(false);

    if(!date){
        setError({message:"Date is required"});
        setAge(null);
       return 
    }
    

    const currentDate=new Date();
    const birthDate=new Date(date);
    if(birthDate>currentDate){
        setError({message:"BirthDate should not be in future"})
        setAge(null);
       return 
    } 
    

    let year=currentDate.getFullYear()-birthDate.getFullYear();
    let month=currentDate.getMonth()-birthDate.getMonth();
    let day=currentDate.getDate()-birthDate.getDate();

//   
if(day<0){
    month-=1;
    day+=new Date(currentDate.getFullYear(),currentDate.getMonth,0).getDate();

}
if(month<0){
    year-=1;
    month+=12;
}
0
    setAge({year,month,day});   
   }


   
    return (
        <div>


    

                <input type ="date" placeholder="dd-mm-yyyy" value={date} onChange={(e)=>setDate(e.target.value)}></input>
                <button type="submit" onClick={calculateAge}>Calculate Age</button>
                 {error && (
                    <p>{error.message}</p>
                 )}
                {age && (
                    <div>
                        <p>Day{age.day} Month {age.month} Year {age.year} </p>
                    </div>
                )}
        
        </div>
    )
}
export default AgeCalculator;