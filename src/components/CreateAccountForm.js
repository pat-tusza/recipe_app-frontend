import React, {useState} from "react"
import Button from 'react-bootstrap/Button'

const CreateAccountForm = ({handleCreateAccount}) => {
    const [createFormInfo, setCreateFormInfo] = useState({
        username: "",
        password: "",
        confirmation: "",
        avatar: ""
    })

    const handleCreateChange = e => {
        const key = e.target.name;
        const val = e.target.value;
        let temp = {...createFormInfo, [key]: val};
        setCreateFormInfo(temp);
    }

    const createAccount = e => {
        e.preventDefault();
        handleCreateAccount(createFormInfo)
    }

    return (
        <div className="login">
            <form onSubmit={createAccount}>
                <input type="text" name="username" placeholder="Username" onChange={handleCreateChange} value={createFormInfo.name}/>
                <p></p><input type="password" name="password" placeholder="Password" onChange={handleCreateChange} value={createFormInfo.password}/>
                <p></p><input type="password" name="confirmation" placeholder="Confirm Password" onChange={handleCreateChange} value={createFormInfo.confirmation}/>
                <p></p><input type="text" name="avatar" placeholder="Avatar pic link" onChange={handleCreateChange} value={createFormInfo.avatar}/>
                <p></p><Button as="input" variant= "success" type="submit" value="Create Account"/>
            </form>
        </div>
    )
}

export default CreateAccountForm