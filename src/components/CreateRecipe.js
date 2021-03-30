import React, {useState, useEffect} from "react"
import IngredientBox from "./IngredientBox"

const CreateRecipe = ({sendToMain}) => {
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

    const handleSubmit = data => {
            fetch("http://localhost:3000/recipes/create_recipe",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(r=>r.json())
                .then(console.log)
            sendToMain();
    }

    const submit = e => {
        e.preventDefault();
        handleSubmit({ingredients: userIngredients, name: name});
    }

    const changeName = e => {
        setName(e.target.value)
    }

    const addIngredient = obj => {
        if (obj.checked){
            const tmpobj = {ingredient: obj.name, quantity: obj.quantity}
            const temp = [...userIngredients, tmpobj];
            setUserIngredients(temp);
        }else{
            const index = userIngredients.indexOf(obj.e.target.value);
            let temp = [...userIngredients];
            temp.splice(index, 1);
            setUserIngredients(temp);
        }
    }

    const proteinBoxes = proteins.map((protein) => <IngredientBox ingredient={protein} addIngredient={addIngredient}/>)
    const veggieBoxes = veggies.map((veggie) => <IngredientBox ingredient={veggie} addIngredient={addIngredient}/>);
    const sideBoxes = sides.map((side) => <IngredientBox ingredient={side} addIngredient={addIngredient}/>);

    const ongoingRecipe = userIngredients.map((obj)=> {
        return <p>{obj.ingredient} quantity: {obj.quantity}</p>
    })

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
            <h2>current</h2>
            {ongoingRecipe}
        </>
    )
}

export default CreateRecipe