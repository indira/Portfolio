import React from "react"
import Page from "../Page/Page"
import Indira from "../../assets/images/indira.png"
import { Link } from "react-router-dom"
function Home() {
  return (
    <Page title="Home">
      <div className="wrapper__border">
        <div className="container">
          <div className="container__left ">
            <h1 className="container__left--title">Hello, I'm Indira Pandey.</h1>
            <h3 className="container__left--paragraph">I'm a full-stack developer based on beautiful city of Vancouver Canada.</h3>
            <div className="col-md-auto btn--martop">
              <button className="button button--white button--white-small button--white-small-top" type="submit">
                <Link to="/register">Register Here</Link>
              </button>
              <button className="button button--white button--white-small" type="submit">
                <Link to="/aboutme">About Me</Link>
              </button>
            </div>
          </div>
          <div className="container__right">
            <div className="container__rounded">
              <img src={Indira} alt="Indira Pandey" />
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Home
