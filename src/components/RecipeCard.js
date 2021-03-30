import React from "react"
import { Link } from "react-router-dom"
import CommentContainer from "react"
import Button from 'react-bootstrap/Button'


const RecipeCard = ({recipe}) => {

    const link = `/recipes/${recipe.id}`
    

    return(
        <div className="card">
            <p className="card-title">{recipe.name}</p>
            <div className="recipe-image">
            <img src={recipe.image} alt={recipe.name}></img>
            </div>
            Id: {recipe.id} <br></br>
            Category: {recipe.category} <br></br>
            {recipe.description} <br></br>
            <Link to={link}> Full Recipe </Link>
        
        </div>
    )
}

export default RecipeCard