import React, {useState} from "react"

const IngredientBox = ({ingredient, addIngredient}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [quantity, setQuantity] = useState(null);

    const changeQuantity = e => {
        setQuantity(e.target.value);
    }

    const confirmAdd = e => {
        addIngredient({checked: true, name: ingredient.name, quantity: quantity});
        setIsChecked(false)
    }

    const quantitySelect = <>
        <input type="number" placeholder={ingredient.unit} onChange={changeQuantity} value={quantity}/>
        <button onClick={confirmAdd}>Add</button>
        {console.log(ingredient)}
    </>

    const checked = e => {
        setIsChecked((s)=> !s);
    }


    return (
        <>
            <input id={ingredient.name} value={ingredient.name} type="checkbox" onChange={checked}/>
            <label htmlFor={ingredient.name}>{ingredient.name}</label>
            {isChecked ? quantitySelect : null}
        </>
    )
}

export default IngredientBox