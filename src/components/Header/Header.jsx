import React, { useContext } from "react"
import { Link } from "react-router-dom"
import HeaderLoggedIn from "./HeaderLoggedIn"
import StateContext from "../../StateContext"
/*This component is for the header section of the page*/
const Header = props => {
  const appState = useContext(StateContext)
  return (
    <header>
      <div className="site-header">
        <div className="site-header__logo">
          <Link to="/" className="site-header__logo">
            {" "}
            INDIRA'S PORTFOLIO
          </Link>
        </div>
        <div className="site-header__elements">
          {appState.loggedIn ? (
            <HeaderLoggedIn />
          ) : (
            <Link to="/signin">
              <button className="button button--blue">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
