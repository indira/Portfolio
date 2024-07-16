import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer wrapper">
      <div className="footer__text">
        <Link to="/">Home</Link> | <Link to="/portfolioposts">Posts</Link> | <Link to="/portfolio">Portfolio</Link>
      </div>
      <div className="footer__text">
        Copyright &copy; {new Date().getFullYear() + " "}
        <Link to="/">Indira's Portfolio</Link>. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
