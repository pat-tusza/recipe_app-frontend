import React, {useState} from "react"

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
            {showText ? <textarea placeholder="instruction" onChange={textChange} value={theInstruction}/> : null } 
            {showButton? <button onClick={handleClick}>add</button> : null}
        </>
    )
}

export default InstructionBox