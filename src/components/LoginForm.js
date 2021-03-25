import React, {useState} from "react"

const LoginForm = ({handleLogin, handleCreateAccount, handleDelete}) => {
    const [formInfo, setFormInfo] = useState({
        username: "",
        password: ""
    })
    const [createFormInfo, setCreateFormInfo] = useState({
        username: "",
        password: "",
        avatar: ""
    })

    const handleChange = e => {
        const key = e.target.name;
        const val = e.target.value;
        let temp = {...formInfo, [key]: val};
        setFormInfo(temp);
    }

    const login = e => {
        e.preventDefault();
        handleLogin(formInfo);
    }

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
            <form onSubmit={login}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} value={formInfo.name}/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formInfo.password}/>
                <input type="submit" value="Login"/>
            </form>
            
            <form onSubmit={createAccount}>
                <input type="text" name="username" placeholder="Username" onChange={handleCreateChange} value={createFormInfo.name}/>
                <input type="password" name="password" placeholder="Password" onChange={handleCreateChange} value={createFormInfo.password}/>
                <input type="text" name="avatar" placeholder="Avatar pic link" onChange={handleCreateChange} value={createFormInfo.avatar}/>
                <input type="submit" value="Create Account"/>
            </form>
            <button onClick={handleDelete}>Delete Account</button>
        </>
    )
}

export default LoginForm