import React, {useState} from "react"

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
        <>
            <form onSubmit={createAccount}>
                <input type="text" name="username" placeholder="Username" onChange={handleCreateChange} value={createFormInfo.name}/>
                <input type="password" name="password" placeholder="Password" onChange={handleCreateChange} value={createFormInfo.password}/>
                <input type="password" name="confirmation" placeholder="Confirm Password" onChange={handleCreateChange} value={createFormInfo.confirmation}/>
                <input type="text" name="avatar" placeholder="Avatar pic link" onChange={handleCreateChange} value={createFormInfo.avatar}/>
                <input type="submit" value="Create Account"/>
            </form>
        </>
    )
}

export default CreateAccountForm