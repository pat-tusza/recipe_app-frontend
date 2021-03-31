import React, { useState, useEffect } from "react"
import RecipeCard from "./RecipeCard"
import Search from "./Search"
import CarouselCard from "./CarouselCard"
import Carousel from 'react-bootstrap/Carousel'

const RecipeContainer = ({user, sendToCreate}) =>{
    const [search, setSearch] = useState("")
    const [catFilt, setCatFilt] = useState('')
    const [isVegan, setIsVegan] = useState(false)
    const [isVeggie, setIsVeggie] = useState(false)
   
    // const [allRecipes, setAllRecipes] = useState([])
    const [recipesToDisplay, setRecipesToDisplay] = useState([])
    
    // const petaNoticeMe = recipesToDisplay.filter((recipe)=>{
    //     if(isVegan){
    //         return recipe.vegan.includes(true)
    //     }else if(isVeggie){
    //         return recipe.vegetrian.includes(true)
    //     }else{
    //         return recipe.name.includes('')
    //     } 
    // })

    const filtRec = recipesToDisplay.filter((recipe) =>{
        return recipe.name.toLowerCase().includes(search.toLowerCase())
    })
    
    const moreCatFilt = recipesToDisplay.filter((recipe)=>{
        return recipe.category.includes(catFilt)
    })

    useEffect(()=>{
        fetch("http://localhost:3000/recipes")
            .then(r=> r.json())
            .then(data=>{
                // setAllRecipes(data);
                setRecipesToDisplay(data)
            })
    }, [])

    console.log(filtRec)

    const toDisplay = filtRec.map((recipe) => <RecipeCard key= {recipe.id} recipe={recipe} user={user} />)
    return(
        <>
             <Search 
            setSearch={setSearch}
            search={search}
            sendToCreate={sendToCreate}
            setCatFilt={setCatFilt}
            catFilt={catFilt}
            setIsVegan={setIsVegan}
            setIsVeggie={setIsVeggie} 
            isVegan={isVegan}
            isVeggie={isVeggie}/>
            <ul className="cards">{toDisplay}</ul>
            <br></br><br></br>
        </> 
    )
}

export default RecipeContainer