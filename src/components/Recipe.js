import React,{ useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import CommentContainer from './CommentContainer';

function RecipePage( {user} ) {
    const params = useParams()
    const id = parseInt(params.id)
    
    const [pageRecipe, setPageRecipe] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [canCommentStatus, setCanCommentStatus] = useState(true);
    const [commentFormInfo, setCommentFormInfo] = useState({
        score: "",
        comment: "",
        recipeId: id,
        userId: user.id
    })
    const [commentList, setCommentList] = useState(null);
    const [averageRatingInfo, setAverageRatingInfo] = useState(null)
    
    
    useEffect(()=>{
        fetch(`http://localhost:3000/recipes/${id}`)
        .then(r=> r.json())
        .then(recipe=>{
            setPageRecipe(recipe)
            setIsLoaded(true)
        })
    }, [])
    
    
    console.log(isLoaded, id, pageRecipe, canCommentStatus, user.id)
    if(!isLoaded) return <h2>Loading....</h2>;

    
    
    const {image, description, category, name} = pageRecipe
    const instructions = pageRecipe.instructions.map((step) => <li>{step}</li>)
    const loadedComments= pageRecipe.comments.map((comment, i)=><p key={i}>{comment.rating} {comment.comment}</p>)
    const loadedIngred= pageRecipe.recipe_ingredients.map((ingred)=>{
        return <li>{ingred.quantity} {ingred.unit} {ingred.ingredient_name} </li>
    })

    // console.log(pageRecipe.recipe_ingredients[0])

    return (
        <div className="recipe-page">
            <h1>{name}</h1>
            <img src={image} alt={description}/>
            <br></br>
            <div className="rec-body">
            <p>Category: {category}</p>
            <p>{description}</p>
            <p>Ingredients</p>
            <ul className="ingred-list">
                {loadedIngred}
            </ul>
            <br></br>
            <p>Instructions</p>
            <ol className="instruct-list">
               {instructions}
            </ol>
            <Link to="/main">Back to Home Screen</Link>
            <CommentContainer 
            user={user}
            recipe={pageRecipe}/>
            </div>
        </div>
    )
}

export default RecipePage
