import React, {useState, useEffect} from "react"
import RecipeCard from "./RecipeCard"

const RecipeContainer = () =>{
    const [allRecipes, setAllRecipes] = useState([])
    const [recipesToDisplay, setRecipesToDisplay] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/recipes")
            .then(r=> r.json())
            .then(data=>{
                console.log(data)
                setAllRecipes(data)
                setRecipesToDisplay(data)
            })
    }, [])

    const toDisplay = recipesToDisplay.map((recipe) => <RecipeCard recipe={recipe} />)
    return(
        <>
            {toDisplay}
        </> 
    )
}

export default RecipeContainer