import React from 'react'
import Button from 'react-bootstrap/Button'

const Search = ({handleFavorite, isFavorite, setSearch, search, sendToCreate, setCatFilt, setIsVegan, setIsVeggie, isVegan, isVeggie }) => {
    
    function handlePetaButts(e){
        if(e.target.innerText === 'Vegan'){
            setIsVegan(!isVegan)
            if(isVeggie){
                setIsVeggie(false)
            }
        }else {
            setIsVeggie(!isVeggie)
            if(isVegan){
                setIsVegan(false)
            }
        }
    }
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
                <Button value={''} onClick={(e)=>setCatFilt(e.target.value)} variant="success">All</Button>{' '}
                <Button value={'favorite'} onClick={handleFavorite} variant="success">Favorites</Button>{' '}
                <Button onClick={(e)=>handlePetaButts(e)} variant="success">Vegan</Button>{' '}
                <Button onClick={(e)=>handlePetaButts(e)} variant="success">Vegetarian</Button>{" "}
                <Button value={'Breakfast'} onClick={(e)=>setCatFilt(e.target.value)} variant="success">Breakfast</Button> {" "}
                <Button value={"Entree"} onClick={(e)=>setCatFilt(e.target.value)} variant="success">Entree</Button>{" "}
                <Button value={"Desert"} onClick={(e)=>setCatFilt(e.target.value)} variant="success">Desert</Button> {" "}
            </div>
            <br></br>
            <div className="cat-butts">
            <Button variant="success" onClick={sendToCreate}>Submit a New Recipe</Button>
            </div>
        </div>
    )
}

export default Search
