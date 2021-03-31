import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import CommentContainer from "react"
import Button from 'react-bootstrap/Button'


const RecipeCard = ({recipe, user}) => {
    const [canCommentStatus, setCanCommentStatus] = useState(true);
    const [isFavorite, setIsFavorite] = useState();
    const [commentFormInfo, setCommentFormInfo] = useState({
        score: "",
        comment: "",
        recipeId: recipe.id,
        userId: user.id
    })
    const [commentList, setCommentList] = useState(recipe.comments.map((comment, i)=><p key={i}>{comment.username} {comment.rating} {comment.comment}</p>));
    const [averageRatingInfo, setAverageRatingInfo] = useState(null)
    useEffect(()=> {
        fetch(`http://localhost:3000/users/${user.id}/${recipe.id}/comments`)
            .then(r=>r.json())
            .then(data=> setCanCommentStatus(data))
        
        fetch(`http://localhost:3000/recipes/${recipe.id}/rating`)
            .then(r => r.json())
            .then(data=>{
                setAverageRatingInfo({
                    score: data.score,
                    amount: data.amount
                })
            })
        fetch(`http://localhost:3000/users/${user.id}/${recipe.id}/get_favorite`)
            .then(r=>r.json())
            .then(r=> setIsFavorite(r))
    },[])

    const instructions = recipe.instructions.map((step) => step);

    const handleComment = e => {
        e.preventDefault();
        fetch("http://localhost:3000/add_comment",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentFormInfo)
        })
            .then(r=>r.json())
            .then(data=> {
                const tempArr = <p>{data.rating} {data.comment}</p>
                const temp = [...commentList, tempArr];
                setCommentList(temp)
                setAverageRatingInfo(s=>{
                    return {
                        score: (s.score + data.rating),
                        amount: (s.amount + 1)
                    }
                });
            })
        setCommentFormInfo({        
            score: "",
            comment: "",
            recipeId: recipe.id,
            userId: user.id
        })
        setCanCommentStatus(false);
    }

    const handleChange = e => {
        const temp = {...commentFormInfo, [e.target.name]: e.target.value};
        setCommentFormInfo(temp);
    }

    const newCommentForm = (
        <>
            <form id="commentForm" onSubmit={handleComment}>
                Score: <input type="number" onChange={handleChange} name="score" value={commentFormInfo.score}/><br></br>
                Comments:<textarea name="comments" form="commentForm" onChange={handleChange} name="comment" value={commentFormInfo.comment}/><br></br>
                <input type="submit"/>
            </form>
        </>
    )

    const link = `/recipes/${recipe.id}`
    
    const handleFavorite = e => {
        setIsFavorite((s)=>!s);
        if (e.target.checked){
            fetch(`http://localhost:3000/users/add_favorite`,{
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({user: user.id, recipe: recipe.id})
            })
                .then(r=>r.json())
                .then(console.log)
        }
        else{
            fetch(`http://localhost:3000/users/remove_favorite`,{
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({user: user.id, recipe: recipe.id})
            })
                .then(r=>r.json())
                .then(console.log)
        }
    }

    return(
        <div className="card">
            <p className="card-title">{recipe.name}</p>
            <div className="recipe-image">
            <img src={recipe.image} alt={recipe.name}></img>
            </div>
            favorite
            <input type="checkbox" className="check" onChange={handleFavorite} checked={isFavorite}/>
            Calories: {recipe.calories} <br></br>
            Category: {recipe.category} <br></br>
            {recipe.description} <br></br>
            {instructions}
            
            <Link to={link}> Full Recipe </Link>
        
        </div>
    )
}

export default RecipeCard