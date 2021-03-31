import React, { useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";

function CommentContainer({user, recipe}){
    const [pageComments, setPageComments] = useState(null)
    const [isComLoaded, setIsComLoaded] = useState(false)
    const params = useParams()
    const comId = params.id
    
    const [canCommentStatus, setCanCommentStatus] = useState(true);
    const [commentFormInfo, setCommentFormInfo] = useState({
        score: "",
        comment: "",
        recipeId: recipe.id,
        userId: user.id
    })
    const [commentList, setCommentList] = useState(recipe.comments.map((comment, i)=> <div className="comments"> <p className ="rating-p"key={i}>Rating: {comment.rating}</p> <p className="comment-bod">{comment.comment}</p> </div>));
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
                setIsComLoaded(true)
            })
            
    },[])


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
                //const tempArr = <p>{data.rating} {data.comment}</p>
                const tempArr = <div className="comments"> <p className ="rating-p">Rating: {data.rating}</p> <p className="comment-bod">{data.comment}</p> </div>
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
        <div className="new-comment">
            <form id="commentForm" onSubmit={handleComment}>
                Score: <input type="number" onChange={handleChange} name="score" value={commentFormInfo.score}/><br></br>
                Comments:<textarea name="comments" form="commentForm" onChange={handleChange} name="comment" value={commentFormInfo.comment}/><br></br>
                <input type="submit"/>
            </form>
        </div>
    )

    // useEffect(()=>{
    //     fetch(`http://localhost:3000/users/${user.id}/${comId}/comments`)
    //     .then(r=>r.json())
    //     .then(data=> setCanCommentStatus(data))
        
    //     fetch(`http://localhost:3000/recipes/${comId}/rating`)
    //     .then(r => r.json())
    //     .then(data=>{
    //         setAverageRatingInfo({
    //             score: data.score,
    //             amount: data.amount
    //         })
    //         setIsLoaded(true)
    //         })
    // },[])

    if(!isComLoaded) return <h2>Comments Loading.... </h2>;
    
    return (
        <div>
            {averageRatingInfo === null || averageRatingInfo.amount === 0 ? <span>No reviews yet!</span> : <span>Average score of {averageRatingInfo.score / averageRatingInfo.amount} based on {averageRatingInfo.amount} reviews</span>} 
            <br></br>
            <h3>Comments</h3>
            {commentList}
            {canCommentStatus? newCommentForm : null }
        </div>
    )
}

export default CommentContainer
 