import React, {useState, useEffect} from "react"

const CreateRecipe = ({handleSubmit}) => {
    const [ingredients, setIngredients] = useState(null)
    const [recipeDiv, setRecipeDiv] = useState([]);
    const [proteins, setProteins] = useState(null);
    const [veggies,setVeggies] = useState(null);
    const [sides, setSides] = useState(null);
    const [userProteins, setUserProteins] = useState([]);
    const [userVeggies, setUserVeggies] = useState([]);
    const [userSides, setUserSides] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/ingredients/proteins")
            .then(r=> r.json())
            .then(data=>setProteins(data))
        fetch("http://localhost:3000/ingredients/veggies")
            .then(a=> a.json())
            .then(data1=>setVeggies(data1))
        fetch("http://localhost:3000/ingredients/sides")
            .then(b=> b.json())
            .then(data2=>setSides(data2))   
    }, [])
    const submit = e => {
        e.preventDefault();
        let allIngredients = [...userProteins, ...userVeggies, ...userSides];
        handleSubmit(allIngredients);
    }

    const changeProtein = e =>{
        const temp = [...userProteins, e.target.value];
        setUserProteins(temp);
    }

    const changeVeggie = e => {
        const temp = [...userVeggies, e.target.value]
        setUserVeggies(temp);
    }

    const changeSide = e => {
        const temp = [...userSides, e.target.value]
        setUserSides(temp);
    }

    const addIngredient = e =>{
        const type = e.target.name;
        switch (type){
            case "protein":
                const protein = <select onChange={changeProtein} name="recipe">
                    {proteins.map((protein) => <option value={protein.name} key={protein.name}>{protein.name}</option>)}
                </select>
                const temppro = [...recipeDiv]
                temppro.push(protein)
                setRecipeDiv(temppro);
                break;
            case "veggie":
                const veggie = <select onChange={changeVeggie} name="recipe">
                    {veggies.map((veggie) => <option value={veggie.name} key={veggie.name}>{veggie.name}</option>)}
                </select>
                const temp = [...recipeDiv]
                temp.push(veggie)
                setRecipeDiv(temp);
                break;
            case "side":
                const side = <select onChange={changeSide} name="recipe">
                    {sides.map((side) => <option value={side.name} key={side.name}>{side.name}</option>)}
                </select>
                const tempSide = [...recipeDiv]
                tempSide.push(side)
                setRecipeDiv(tempSide);
                break;
            default:
        }
    }

    return (
        <>
        <button onClick={addIngredient} name="protein">Add a protein</button> 
        <button onClick={addIngredient} name="veggie">Add a vegie</button> 
        <button onClick={addIngredient} name="side">Add a side</button> 
            <form onSubmit={submit}>
                {recipeDiv}
                <input type="submit"/>
            </form>
        </>
    )
}

export default CreateRecipe