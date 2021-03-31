import React, {useState} from "react"
import Button from 'react-bootstrap/Button'

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
        <div className="login">
            <form onSubmit={submit}>
                New Password: <input name="password" value={formInfo.password} onChange={handleChange} type="password"/>
                Confirm Password: <input name="confirmation" value={formInfo.confirmation} onChange={handleChange}  type="password"/>
                <Button as="input" variant="success" className="edit-butt-sub" type="submit"/>
            </form>
        </div>
    )
}

export default EditPassword