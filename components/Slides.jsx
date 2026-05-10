
import Slidewindow from "./Slidewindow";


const Slides=()=>{
    const data=[


     { title: "Today's workout plan", text: "We're gonna do 3 fundamental exercises." },
  { title: "First, 10 push-ups", text: "Do 10 reps. Remember about full range of motion." },
  { title: "Next, 20 squats", text: "Squats are important." }
  
]
    return (
        <Slidewindow data={data}></Slidewindow>
    )
}

export default Slides;