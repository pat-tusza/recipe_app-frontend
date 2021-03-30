import React, { useState, useEffect } from "react"
import RecipeCard from "./RecipeCard"
import Search from "./Search"
import CarouselCard from "./CarouselCard"

const RecipeContainer = ({user, sendToCreate}) =>{
    const [search, setSearch] = useState("")
    const [allRecipes, setAllRecipes] = useState([])
    const [recipesToDisplay, setRecipesToDisplay] = useState([])
    
    const filtRec = recipesToDisplay.filter((recipe) =>{
        return recipe.name.toLowerCase().includes(search.toLowerCase())
    })
    
    useEffect(()=>{
        fetch("http://localhost:3000/recipes")
            .then(r=> r.json())
            .then(data=>{
                setAllRecipes(data);
                setRecipesToDisplay(data)
            })
    }, [])

    const toDisplay = recipesToDisplay.map((recipe) => <RecipeCard key= {recipe.name} recipe={recipe} user={user} />)
    return(
        <>
             <Search 
            setSearch={setSearch}
            search={search}/>
            {/* {featuredRec} */}
            <ul className="cards">{toDisplay}</ul>
            <br></br><br></br>
            <button onClick={sendToCreate}>Create New Recipe</button>
            {toDisplay}
        </> 
    )
}

export default RecipeContainer