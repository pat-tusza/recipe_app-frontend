import React, {useState, useEffect} from "react"

const IngredientContainer = () =>{
    const [allIngredients, setAllIngredients] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/ingredients")
            .then(r=> r.json())
            .then(data=>console.log(data))
    }, [])

    return(
        <>
        </>
    )
}

export default IngredientContainer