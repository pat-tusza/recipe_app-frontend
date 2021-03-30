import React, { useState } from "react"
import RecipeCard from "./RecipeCard"
import Search from "./Search"
import CarouselCard from "./CarouselCard"

const RecipeContainer = ({recipesToDisplay}) =>{
    const [search, setSearch] = useState("")
    
    const filtRec = recipesToDisplay.filter((recipe) =>{
        return recipe.name.toLowerCase().includes(search.toLowerCase())
    })

    const toDisplay = filtRec.map((recipe) => <RecipeCard key= {recipe.id} recipe={recipe} />)

    const featuredRec = recipesToDisplay.slice(0,2).map((recipe) => <CarouselCard key= {recipe.id} recipe={recipe} />)

    

    return(
        <>
            <Search 
            setSearch={setSearch}
            search={search}/>
            {/* {featuredRec} */}
            <ul className="cards">{toDisplay}</ul>
        </> 
    )
}

export default RecipeContainer