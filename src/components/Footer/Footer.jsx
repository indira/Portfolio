import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <footer className="footer wrapper">
      <div className="footer__text">
        <div>
          <Link to="/">Home</Link> | <Link to="/portfolioposts">Experience</Link> | <Link to="/portfolio">Portfolio</Link>
        </div>
        <div>
          Copyright &copy; {new Date().getFullYear() + " "}
          <Link to="/">Indira</Link>. All rights reserved.
        </div>
      </div>
      <div className="footer__social">
          <a href="https://github.com/Indira" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>{" "}
          <strong> | </strong>
          <a href="https://www.linkedin.com/in/indira-pandey/" target="_blank" rel="noopener noreferrer">
            {" "}
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
      </div>
    </footer>
  )
}

export default Footer
