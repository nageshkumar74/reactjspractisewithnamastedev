import React, { useState } from 'react'

function ChipsInput() {

    const [input, setInput] = useState("");
    const [chips, setChips] = useState([]);
    const [idCounter, setIdCounter] = useState(0);
    const handleOnChange = (e) => {
        setInput(e.target.value)
       
    }
    const handleKeyDown = (e) => {

        if (e.key === "Enter" && input.trim() !== "") {
            const newChip = {
                id: idCounter,
                value: input.trim()
            };
            setChips([...chips, newChip]);
            setIdCounter(idCounter + 1)
            setInput("");


        }
    }

    const handleDelete = (id) => {
        setChips(chips.filter((chip) => chip.id != id))
    }

return (
    <div>
        <h2>Chips Input</h2>
        <input type="text" value={input} onChange={handleOnChange} placeholder='Enter the text' onKeyDown={handleKeyDown} />
        <div>

            {
                chips.map((chip) => (
                    <div key={chip.id}>

                        <span>{chip.value}</span>
                        <button onClick={()=>handleDelete(chip.id)}></button>
                    </div>

                ))
            }

        </div>

    </div>
)

}
export default ChipsInput
