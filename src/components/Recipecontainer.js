import React, {useState, useEffect} from "react"
import RecipeCard from "./RecipeCard"

const RecipeContainer = ({user}) =>{
    const [allRecipes, setAllRecipes] = useState([])
    const [recipesToDisplay, setRecipesToDisplay] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/recipes")
            .then(r=> r.json())
            .then(data=>{
                setAllRecipes(data)
                setRecipesToDisplay(data)
            })
    }, [])

    const toDisplay = recipesToDisplay.map((recipe) => <RecipeCard key= {recipe.name} recipe={recipe} />)
    return(
        <>
            <h1>{user.username}</h1>
            {toDisplay}
        </> 
    )
}

export default RecipeContainer