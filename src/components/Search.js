import React from 'react'
import Button from 'react-bootstrap/Button'

const Search = ({setSearch, search, sendToCreate }) => {
    
    return (
        <div className="search-container" >
            <form className="center-search">
                <input 
                className="search"
                type="text" 
                placeholder="Search"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                />
            </form>
            <br></br>
            <div className="cat-butts">
                <Button variant="success">Vegan</Button>{' '}
                <Button variant="success">Vegitarian</Button>{" "}
                <Button variant="success">Breakfast</Button> {" "}
                <Button variant="success">Entree</Button>{" "}
                <Button variant="success">Desert</Button> {" "}
            </div>
            <br></br>
            <div className="cat-butts">
            <Button variant="success" onClick={sendToCreate}>Submit a New Recipe</Button>
            </div>
        </div>
    )
}

export default Search
