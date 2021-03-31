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
    
    const petaNoticeMe = recipesToDisplay.filter((recipe)=>{
        if(isVegan){
            return recipe.vegan
        }else if(isVeggie){
            return recipe.vegetarian
        }else{
            return recipe.name.includes('')
        } 
    })
    
    console.log(recipesToDisplay)

    const moreCatFilt = petaNoticeMe.filter((recipe)=>{
        return recipe.category.includes(catFilt)
    })
    const filtRec = moreCatFilt.filter((recipe) =>{
        return recipe.name.toLowerCase().includes(search.toLowerCase())
    })
    

    useEffect(()=>{
        fetch("http://localhost:3000/recipes")
            .then(r=> r.json())
            .then(data=>{
                // setAllRecipes(data);
                setRecipesToDisplay(data);
            })
    }, [])

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