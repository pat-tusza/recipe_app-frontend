import React, {useState} from "react"
import Button from 'react-bootstrap/Button'

const HomePage = ({sendToLogin, sendToCreate}) => {

    return (
        <div className="home-butts">
            <Button variant="success" onClick={sendToLogin}>Login</Button><br></br>
            <Button variant="success" className="make-butt" onClick={sendToCreate}>Create Account</Button>
        </div>
    )
}

export default HomePage