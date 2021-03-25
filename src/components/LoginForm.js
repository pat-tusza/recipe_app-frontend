import React, {useState} from "react"

const LoginForm = ({handleLogin}) => {
    const [formInfo, setFormInfo] = useState({
        username: "",
        password: ""
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

    return (
        <form onSubmit={login}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} value={formInfo.name}/>
            <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formInfo.password}/>
            <input type="submit" value="Login"/>
        </form>
    )
}

export default LoginForm