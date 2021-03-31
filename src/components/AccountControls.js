import React from "react"
import Button from 'react-bootstrap/Button'

const AccountControls = ({user, handleDelete,handleEditAccount, handleLogout}) => {
    return (
        <div className="user-bar">
            <h1>{user.username}</h1>
            <Button variant="success" onClick={handleDelete}>Delete Account</Button>{" "}
            <Button variant="success" onClick={handleEditAccount}>Edit Account</Button>{" "}
            <Button variant="success" onClick={handleLogout}>Logout</Button>{" "}
        </div>
    )
}

export default AccountControls