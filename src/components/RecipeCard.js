import React from "react"

const RecipeCard = ({recipe}) => {

    return(
        <div className="card">
            <div className="recipe-image">
            <img src={recipe.image} alt={recipe.name}></img>
            </div>
            Name: {recipe.name}<br></br>
            Category: {recipe.category} <br></br>
            Description: {recipe.description} <br></br>

        </div>
    )
}

export default RecipeCard