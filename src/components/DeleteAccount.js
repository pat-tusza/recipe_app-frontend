import Button from 'react-bootstrap/Button'

const DeleteAccountConfirm = ({handleDelete}) => {

    return (
        <div className="del-cen">
        <Button variant="success" onClick={handleDelete}>Delete Account?</Button>
        </div>
    )

}

export default DeleteAccountConfirm