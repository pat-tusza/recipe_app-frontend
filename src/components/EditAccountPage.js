import React, {useState} from "react"
import Button from 'react-bootstrap/Button'

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
        <div className="login">
            <form onSubmit={edit}>
                Username: <input type="text" name="name" value={formInfo.name} onChange={handleChange} placeholder={user.username} /><br></br>
                Avatar: <input type="text" name="avatar" value={formInfo.avatar} onChange={handleChange} />
                <Button as="input" variant="success" className= "edit-butt-sub" type="submit"/>
            </form><br></br>
            <Button variant="success" onClick={sendToEditPassword}>Change Password</Button>

        </div>
    )
}

export default EditAccountPage