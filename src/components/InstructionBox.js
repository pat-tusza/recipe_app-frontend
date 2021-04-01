import React, {useState} from "react"
import Button from 'react-bootstrap/Button'

const InstructionBox = ({createInstruction}) => {

    const [theInstruction, setTheInstruction] = useState("");
    const [showButton, setShowButton] = useState(true);
    const [showText, setShowText] = useState(true);

    const textChange = e => {
        setTheInstruction(e.target.value);
    }

    const handleClick = () =>{
        createInstruction(theInstruction);
        setShowButton(false);
        setShowText(false);
    }

    return(
        <>
            {showText ? <textarea placeholder="Instruction" onChange={textChange} value={theInstruction}/> : null } 
            {showButton? <p><Button variant="success" onClick={handleClick}>Add</Button></p> : null}
        </>
    )
}

export default InstructionBox