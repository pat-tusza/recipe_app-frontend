import React from 'react'
import Button from 'react-bootstrap/Button'

const Header = () => {
    // need to add banner-like CSS
    return (
        <div className= "banner">
            <h1>Recipeze</h1>
            <h2>Recipes Made Eazy</h2>
            <Button variant="success">Sign Out</Button>
        </div>
    )
}

export default Header
