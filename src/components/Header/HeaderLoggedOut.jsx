import React, { useState, useContext } from "react"
import Axios from "axios"
import { Link } from "react-router-dom"
import DispatchContext from "../../DispatchContext"
import { useNavigate } from "react-router-dom"

function HeaderLoggedOut(props) {
  const navigate = useNavigate()
  const appDispatch = useContext(DispatchContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const url = `${process.env.REACT_APP_API_AUTH_TOKEN}`
      const response = await Axios.post(url, { username, password })
      if (response.data) {
        appDispatch({ type: "login", data: response.data })
        navigate(`/`)
      } else {
        console.log("Incorrect username and password")
      }
    } catch (e) {
      console.log("Something went wrong", e.message)
    }
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <div className="form">
      <div className="site-header__logo">
        <Link to="/" className="site-header__logo headline--medium">
          LOG-IN
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={e => setUsername(e.target.value)} name="username" type="text" placeholder="Username or Email Address" autoComplete="off" />
        </div>
        <div className="password-container" style={{ position: "relative" }}>
          <input onChange={e => setPassword(e.target.value)} name="password" type={isPasswordVisible ? "text" : "password"} placeholder="Password" />
          <i className="toggle-password" id="toggle-password" style={{ cursor: "pointer", position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }} onClick={togglePasswordVisibility}>
            {isPasswordVisible ? "🙈" : "👁️"}
          </i>
        </div>
        <button className="button button--blue">Sign In</button>
      </form>
    </div>
  )
}

export default HeaderLoggedOut
