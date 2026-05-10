import React, { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import WordOmiiter from './components/WordOmiiter'
import AgeCalcucator from './components/AgeCalucator'
import Admin from './components/Admin'

import {Provider, useDispatch} from "react-redux";
import Reacttoolkit from './components/Reacttoolkit'
import store from "./redux-toolkit/Store";
import Header from './components/Header'
import Product from './components/Product'
import { addItem, clearItem } from './redux-toolkit/Slice'

import ErrorHandle from './components/ErrorHandle'
import FocusInput from './components/FocusInput'
import ChipsInput from './components/ChipsInput'
import LeapYear from './components/LeapYear'
import ZigZag from './components/ZigZag'
import Guessthenumber from './components/Guessthenumber'

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <div>
     
          
          {/* <Header></Header> */}
         
       
         {/* <Product></Product> */}
        
        {/* <MutatedataForm/> */}
        
        {/* <ErrorHandle/> */}
        {/* <AgeCalcucator></AgeCalcucator> */}
        {/* <FocusInput/> */}

        {/* <ChipsInput></ChipsInput> */}
        {/* <LeapYear/> */}
        {/* <Validation></Validation> */} 
        {/* <Mutate/> */}
        {/* <TodoApp/> */}
         {/* <Slidewindow/> */}
        {/* <WordOmiiter/> */}
        {/* <AgeCalcucator/> */}
        {/* <Admin/> */}
        {/* <ZigZag></ZigZag> */}
        <Guessthenumber/>
       </div>
    </>
  )
}

export default App
