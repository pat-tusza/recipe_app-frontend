import React, { useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";

function CommentContainer(){
    const [pageComments, setPageComments] = useState(null)
    const [isloaded, setIsLoaded] = useState(false)
    const [errors, setErrors] = useState([]);
    
    const params = useParams()
    const id = params.id


    useEffect(()=>{
        fetch(`http://localhost:3000/comments/${id}`)
        .then((r)=>{
            return r.json().then((comment)=>{
                if(r.ok){
                    return comment
                } else{
                    throw comment
                }
            })
        })
        .then((comment)=>{
            setPageComments(comment)
            setIsLoaded(true)
        })
        .catch((comment)=>{
            setErrors(comment.errors)
        })
    },[])

    if(!isloaded) return <h2>Comments Loading.... </h2>;
    
    return (
        <div>
            
        </div>
    )
}

export default CommentContainer
