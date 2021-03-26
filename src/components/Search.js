import React from 'react'

const Search = () => {
    return (
        <div className="search-container" >
            <form className="center-search">
                <input 
                className="search"
                type="text" 
                placeholder="Search"
                />
            </form>
            <br></br>
            <div className="cat-butts">
                <button>Vegan</button>
                <button>Vegitarian</button>
                <button>Savory</button>
                <button>Breakfast</button>
                <button>Desert</button>
            </div>
            <br></br>
            <div className="cat-butts">
                <button>Submit a New Recipe</button>
            </div>
        </div>
    )
}

export default Search
