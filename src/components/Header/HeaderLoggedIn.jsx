import React, { useContext } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import DispatchContext from "../../DispatchContext"

function HeaderLoggedIn(props) {
  const navigate = useNavigate()
  const appDispatch = useContext(DispatchContext)

  const handleLogout = e => {
    e.preventDefault()
    appDispatch({ type: "logout" })
    navigate(`/`)
  }

  const handleLogout1 = e => {
    e.preventDefault()
    const fetchData = async () => {
      const token = localStorage.getItem("IndProtToken")
      if (!token) {
        console.error("No token found. Please log in again.")
        return
      }
      try {
        const userResponse = await axios.get(`${process.env.REACT_APP_API_ROOT}users/me`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        navigate(`/profile/${userResponse.data.id}`)
      } catch (e) {
        console.log("Sorry, there was an error")
      }
    }
    fetchData()
  }

  return (
    <>
      {
        <>
          <button onClick={handleLogout1} style={{ border: "none", background: "none", padding: 0 }}>
            <img className="headline-avatar" src={localStorage.getItem("IndProtAvatar")} alt="avatar" />
          </button>
          <button className="button button--green">
            <Link to="/create-post">Create Post</Link>
          </button>
          <button onClick={handleLogout} className="button button--blue">
            Sign Out
          </button>
        </>
      }
    </>
  )
}

export default HeaderLoggedIn
