import React, { useContext } from "react"
import { Link } from "react-router-dom"
import HeaderLoggedIn from "./HeaderLoggedIn"
import StateContext from "../../StateContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
/*This component is for the header section of the page*/
const Header = props => {
  const appState = useContext(StateContext)
  return (
    <header>
      <div className="site-header">
        <div className="site-header__logo">
          <Link to="/" className="site-header__logo">
            {" "}
            INDIRA
          </Link>
          <a href="https://github.com/Indira" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>{" "}
          <a href="https://www.linkedin.com/in/indira-pandey/" target="_blank" rel="noopener noreferrer">
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="site-header__navbar">
          <Link to="/">Home </Link> | <Link to="/portfolioposts">Experience</Link> | <Link to="/portfolio">Portfolio</Link>
        </div>
        <div className="site-header__elements">
          {appState.loggedIn ? (
            <HeaderLoggedIn />
          ) : (
            <Link to="/signin">
              <button className="button button--blue">Sign In</button>
            </Link>
          )}
          {"  "}
          <div></div>
        </div>
      </div>
    </header>
  )
}

export default Header
