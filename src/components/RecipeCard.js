import React from "react"

const RecipeCard = ({recipe}) => {

    return(
        <div>
            Name: {recipe.name}<br></br>
            Category: {recipe.category} <br></br>
            Description: {recipe.description} <br></br>
            <img src={recipe.image} alt={recipe.name}></img>

        </div>
    )
}

export default RecipeCard