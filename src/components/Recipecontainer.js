import React, {useState, useEffect} from "react"
import RecipeCard from "./RecipeCard"
import Search from "./Search"

const RecipeContainer = ({recipesToDisplay}) =>{
    const [search, setSearch] = useState("")
    
    const filtRec = recipesToDisplay.filter((recipe) =>{
        return recipe.name.toLowerCase().includes(search.toLowerCase())
    })

    const toDisplay = filtRec.map((recipe) => <RecipeCard key= {recipe.id} recipe={recipe} />)
    
    return(
        <>
            <Search 
            setSearch={setSearch}
            search={search}/>
            <ul className="cards">{toDisplay}</ul>
        </> 
    )
}

export default RecipeContainer