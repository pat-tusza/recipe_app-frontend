import React, {useState, useEffect} from "react"

const CreateRecipe = ({handleSubmit}) => {
    const [ingredients, setIngredients] = useState(null)
    const [proteins, setProteins] = useState([]);
    const [veggies,setVeggies] = useState([]);
    const [sides, setSides] = useState([]);
    const [name, setName] = useState("")
    const [userIngredients, setUserIngredients] = useState([])
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
        handleSubmit({ingredients: userIngredients, name: name});
    }

    const nums = [1,2,3,4,5,6,7,8,9]

    const changeName = e => {
        setName(e.target.value)
    }

    const addIngredient = e => {
        if (e.target.checked){
            const temp = [...userIngredients, e.target.value];
            setUserIngredients(temp);
        }else{
            const index = userIngredients.indexOf(e.target.value);
            let temp = [...userIngredients];
            temp.splice(index, 1);
            setUserIngredients(temp);
        }
    }

    const proteinBoxes = proteins.map((protein) => <div key={protein.name}> <input id={protein.name} value={protein.name} type="checkbox" onChange={addIngredient}/><label htmlFor={protein.name}>{protein.name}</label> </div>)
    const veggieBoxes = veggies.map((veggie) => <div key={veggie.name}> <input id={veggie.name} type="checkbox" value={veggie.name} onChange={addIngredient}/><label htmlFor={veggie.name}>{veggie.name}</label> </div>)
    const sideBoxes = sides.map((side) => <div key={side.name}> <input id={side.name} type="checkbox" value={side.name} onChange={addIngredient}/><label htmlFor={side.name}>{side.name}</label> </div>)

    return (
        <>
        Recipe name: <input type="text" onChange={changeName} value={name} /><br></br>
            <form onSubmit={submit}>
                <h2>Proteins</h2>
                {proteinBoxes}
                <h2>Veggies</h2>
                {veggieBoxes}
                <h2>Sides</h2>
                {sideBoxes}
                <input type="submit"/>
            </form>
        </>
    )
}

export default CreateRecipe