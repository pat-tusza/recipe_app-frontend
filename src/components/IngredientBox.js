import React, {useState} from "react"

const IngredientBox = ({protein, addIngredient}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [quantity, setQuantity] = useState(null);

    const changeQuantity = e => {
        setQuantity(e.target.value);
    }

    const confirmAdd = e => {
        addIngredient({checked: true, name: protein.name, quantity: quantity});
    }

    const quantitySelect = <>
        <input type="number" onChange={changeQuantity} value={quantity}/>
        <button onClick={confirmAdd}>Add</button>
    </>

    const checked = e => {
        setIsChecked((s)=> !s);
    }


    return (
        <>
            <input id={protein.name} value={protein.name} type="checkbox" onChange={checked}/>
            <label htmlFor={protein.name}>{protein.name}</label>
            {isChecked ? quantitySelect : null}
        </>
    )
}

export default IngredientBox