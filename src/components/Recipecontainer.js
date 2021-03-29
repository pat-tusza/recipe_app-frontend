import React, {useState, useEffect} from "react"
import RecipeCard from "./RecipeCard"

const RecipeContainer = ({user, sendToCreate, submitComment}) =>{
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

    const toDisplay = recipesToDisplay.map((recipe) => <RecipeCard key= {recipe.name} recipe={recipe} submitComment={submitComment} />)
    return(
        <>
            <br></br><br></br>
            <button onClick={sendToCreate}>Create New Recipe</button>
            {toDisplay}
        </> 
    )
}

export default RecipeContainer