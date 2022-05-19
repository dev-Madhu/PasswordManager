import './index.css'

const ShowPassword = props => {
  const {userDetails, deleteUser} = props
  const {id, username, website} = userDetails
  const initial = website[0].toUpperCase()

  const onClickDeleteIcon = () => {
    deleteUser(id)
  }

  return (
    <li className="list-item">
      <div className="password-container">
        <div className="circle">{initial}</div>
        <div className="user-info">
          <div>
            <p className="name">{website}</p>
            <p className="name">{username}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              className="stars"
              alt="stars"
            />
          </div>
          <button
            className="button"
            type="button"
            onClick={onClickDeleteIcon}
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default ShowPassword
