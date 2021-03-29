import React, {useState, useEffect} from "react"

const RecipeCard = ({recipe, user}) => {
    const [canCommentStatus, setCanCommentStatus] = useState(true);
    const [commentFormInfo, setCommentFormInfo] = useState({
        score: "",
        comment: "",
        recipeId: recipe.id,
        userId: user.id
    })
    const [commentList, setCommentList] = useState(recipe.comments.map((comment)=><p>{comment.rating} {comment.comment}</p>));
    const [hasCommentedArr, setHasCommentedArr] = useState(null);

    useEffect(()=> {
        fetch(`http://localhost:3000/users/${user.id}/${recipe.id}/comments`)
            .then(r=>r.json())
            .then(data=> setCanCommentStatus(data))
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
                setCommentList(temp);
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

    return(
        <div>
            Name: {recipe.name}<br></br>
            Category: {recipe.category} <br></br>
            Description: {recipe.description} <br></br>
            Instructions: {instructions}<br></br>
            <img src={recipe.image} alt={recipe.name}></img>
            <h3>Comments</h3>
            {commentList}
            {canCommentStatus? newCommentForm : null }
        </div>
    )
}

export default RecipeCard