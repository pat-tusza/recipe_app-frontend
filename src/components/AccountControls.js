

const AccountControls = ({user, handleDelete,handleEditAccount, handleLogout}) => {
    return (
        <>
            <h1>{user.username}</h1>
            <button onClick={handleDelete}>Delete Account</button>{" "}
            <button onClick={handleEditAccount}>Edit Account</button>{" "}
            <button onClick={handleLogout}>Logout</button>{" "}
        </>
    )
}

export default AccountControls