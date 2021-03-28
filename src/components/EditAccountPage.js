import React, {useState} from "react"
const EditAccountPage = ({user, handleEdit, sendToEditPassword}) => {
    const [formInfo, setFormInfo] = useState({
        name: undefined,
        avatar: undefined
    })

    const handleChange = e => {
        const key = e.target.name;
        const val = e.target.value;
        let temp = {...formInfo, [key]: val};
        setFormInfo(temp);
    }

    const edit = e => {
        e.preventDefault();
        handleEdit(formInfo);
    }

    return (
        <div>
            <form onSubmit={edit}>
                Username: <input type="text" name="name" value={formInfo.name} onChange={handleChange} placeholder={user.username} /><br></br>
                Avatar: <input type="text" name="avatar" value={formInfo.avatar} onChange={handleChange} />
                <input type="submit"/>
            </form><br></br>
            <button onClick={sendToEditPassword}>Change Password</button>

        </div>
    )
}

export default EditAccountPage