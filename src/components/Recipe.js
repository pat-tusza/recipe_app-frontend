import React,{ useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import CommentContainer from './CommentContainer';

function RecipePage() {
    const [pageRecipe, setPageRecipe] = useState(null)
    const [isloaded, setIsLoaded] = useState(false)
    
    const params = useParams()
    console.log(params)
    const id = params.id
    
    useEffect(()=>{
        fetch(`http://localhost:3000/recipes/${id}`)
            .then(r=> r.json())
            .then(recipe=>{
                setPageRecipe(recipe)
                setIsLoaded(true)
            })
    }, [id])

    if(!isloaded) return <h2>Loading....</h2>;

    console.log(pageRecipe)
    
    const {image, description, category, name} = pageRecipe
    return (
        <div className="recipe-page">
            <h1>{name}</h1>
            <img src={image} alt={description}/>
            <br></br>
            <p>Category: {category}</p>
            <p>{description}</p>
            <p>Ingredients</p>
            <ul className="ingred-list">
                <li>Ingredients will go here</li>
            </ul>
            <br></br>
            <p>Instructions</p>
            <ul className="instruct-list">
                <li>Instructions will go here</li>
            </ul>
            <Link to="/main">Back to Home Screen</Link>
            <CommentContainer />
        </div>
    )
}

export default RecipePage
