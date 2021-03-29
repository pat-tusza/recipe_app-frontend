import React, {useState} from "react"

const RecipeCard = ({recipe, submitComment}) => {
    const [addCommentStatus, setAddCommentStatus] = useState(false);
    const [commentFormInfo, setCommentFormInfo] = useState({
        score: undefined,
        comment: undefined
    })

    const instructions = recipe.instructions.map((step) => step);
    const comments = recipe.comments.map((comment)=> comment);

    const handleComment = e => {
        e.preventDefault();
        submitComment(commentFormInfo);
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

    const showCommentForm = e =>{
        setAddCommentStatus((s)=> !s)
    }

    return(
        <div>
            Name: {recipe.name}<br></br>
            Category: {recipe.category} <br></br>
            Description: {recipe.description} <br></br>
            Instructions: {instructions}<br></br>
            <img src={recipe.image} alt={recipe.name}></img>
            <h3>Comments</h3>
            {comments}<br></br>
            {addCommentStatus? newCommentForm : <button onClick={showCommentForm}>Comment and Score!</button>}

        </div>
    )
}

export default RecipeCard