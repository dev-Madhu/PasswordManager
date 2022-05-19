import {Component} from 'react'
import {v4} from 'uuid'

import NoPasswordView from '../NoPasswordView'
import ShowPassword from '../ShowPassword'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    searchInput: '',
    usersData: [],
  }

  onChangeUsernameField = event => {
    this.setState({username: event.target.value})
  }

  onChangePasswordField = event => {
    this.setState({password: event.target.value})
  }

  onChangeWebsiteField = event => {
    this.setState({website: event.target.value})
  }

  onChangeSearchField = event => {
    this.setState({searchInput: event.target.value})
  }

  renderWebsiteField = () => {
    const {website} = this.state

    return (
      <div className="input-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
          className="website"
          alt="website"
        />
        <input
          type="text"
          value={website}
          className="input"
          onChange={this.onChangeWebsiteField}
          placeholder="Enter Website"
        />
      </div>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <div className="input-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
          className="website"
          alt="username"
        />
        <input
          type="text"
          value={username}
          className="input"
          onChange={this.onChangeUsernameField}
          placeholder="Enter Username"
        />
      </div>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <div className="input-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
          className="website"
          alt="password"
        />
        <input
          type="password"
          className="input"
          value={password}
          onChange={this.onChangePasswordField}
          placeholder="Enter Password"
        />
      </div>
    )
  }

  renderSearchField = () => {
    const {searchInput} = this.state
    return (
      <div className="input-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
          className="website"
          alt="search"
        />
        <input
          type="search"
          className="input"
          value={searchInput}
          onChange={this.onChangeSearchField}
        />
      </div>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newData = {
      id: v4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      usersData: [...prevState.usersData, newData],
      username: '',
      website: '',
      password: '',
    }))
  }

  deleteUser = id => {
    const {usersData} = this.state
    const modifiedList = usersData.filter(each => each.id !== id)
    this.setState({usersData: modifiedList})
  }

  render() {
    const {usersData} = this.state
    const len = usersData.length
    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="app-container">
          <div className="responsive-container">
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <h1 className="heading">Add New Password</h1>
              {this.renderWebsiteField()}
              {this.renderUsernameField()}
              {this.renderPasswordField()}
              <button type="submit" className="submit-btn">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              className="password-manager"
              alt="password manager"
            />
          </div>
        </div>
        <div className="show-password-view-container">
          <nav className="nav-bar">
            <div className="nav-container">
              <h1 className="nav-title">Your Passwords</h1>
              <p className="box">{usersData.length}</p>
            </div>
            <div className="search-box">{this.renderSearchField()}</div>
          </nav>
          <hr className="line" />
          <div className="show-password">
            <input type="checkbox" id="checkbox" className="checkbox1" />
            <label className="input-label" htmlFor="checkbox">
              Show Passwords
            </label>
          </div>
          {len === 0 ? (
            <NoPasswordView />
          ) : (
            <ul className="password-list">
              {usersData.map(eachUser => (
                <ShowPassword
                  userDetails={eachUser}
                  key={eachUser.key}
                  deleteUser={this.deleteUser}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default PasswordManager
