import React, {useState} from "react"

const EditPassword = ({handleSubmit}) => {
    const [formInfo, setFormInfo] = useState({
        password: undefined,
        confirmation: undefined
    })

    const submit = e => {
        e.preventDefault();
        handleSubmit(formInfo);
    }

    const handleChange = e => {
        const key = e.target.name;
        const val = e.target.value;
        let temp = {...formInfo, [key]: val};
        setFormInfo(temp);
    }

    return (
        <>
            <form onSubmit={submit}>
                New Password: <input name="password" value={formInfo.password} onChange={handleChange} type="password"/>
                Confirm Password: <input name="confirmation" value={formInfo.confirmation} onChange={handleChange}  type="password"/>
                <input type="submit"/>
            </form>
        </>
    )
}

export default EditPassword