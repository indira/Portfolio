import React from "react"
import Page from "../Page/Page"
function HomeGuest() {
  return (
    <Page title="HomeLoggedIn">
      <div className="wrapper  wrapper__border">
        <div className="container__home">
          <h2 className="headline--large">Hello {localStorage.getItem("IndProtUsername")}, Welcome to our platform!</h2>
          <p>Share your stories easily on our platform's user-friendly interface, perfect for writers of all levels.</p>
        </div>
      </div>
    </Page>
  )
}

export default HomeGuest
