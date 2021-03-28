import React, {useState, useEffect} from "react"

const CreateRecipe = ({handleSubmit}) => {
    const [ingredients, setIngredients] = useState(null)
    const [recipeBuilder, setRecipeBuilder] = useState(null)
    let theRecipe;
    useEffect(() => {
        fetch("http://localhost:3000/ingredients")
            .then(r=> r.json())
            .then(data=>setIngredients(data))
        
    }, [])
    const submit = e => {
        e.preventDefault();
        handleSubmit();
    }

    const addProtein = () => {
        let temp = recipeBuilder;
        console.log(recipeBuilder)
        setRecipeBuilder(<select name="recipe">
            <option>Protein</option>
        </select>)
    }

    return (
        <>
            <form onSubmit={submit}>
                <button onClick={addProtein}>Add a protein</button> <button>Add a vegi</button> <button>Add a Side</button>
                {recipeBuilder}
            </form>
        </>
    )
}

export default CreateRecipe