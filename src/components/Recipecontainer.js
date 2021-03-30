import React, { useState, useEffect } from "react"
import RecipeCard from "./RecipeCard"
import Search from "./Search"
import CarouselCard from "./CarouselCard"

const RecipeContainer = ({user, sendToCreate}) =>{
    const [search, setSearch] = useState("")
    // const [allRecipes, setAllRecipes] = useState([])
    const [recipesToDisplay, setRecipesToDisplay] = useState([])
    
    const filtRec = recipesToDisplay.filter((recipe) =>{
        return recipe.name.toLowerCase().includes(search.toLowerCase())
    })
    
    useEffect(()=>{
        fetch("http://localhost:3000/recipes")
            .then(r=> r.json())
            .then(data=>{
                // setAllRecipes(data);
                setRecipesToDisplay(data)
            })
    }, [])

    console.log(filtRec)

    const toDisplay = filtRec.map((recipe) => <RecipeCard key= {recipe.id} recipe={recipe} user={user} />)
    return(
        <>
             <Search 
            setSearch={setSearch}
            search={search}/>
            <ul className="cards">{toDisplay}</ul>
            <br></br><br></br>
            <button onClick={sendToCreate}>Create New Recipe</button>
        </> 
    )
}

export default RecipeContainer