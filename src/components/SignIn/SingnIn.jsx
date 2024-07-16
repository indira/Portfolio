import Page from "../Page/Page"
import HeaderLoggedOut from "../Header/HeaderLoggedOut"

function SignIn(props) {
  return (
    <Page title="Log In">
      <div className="wrapper  wrapper__border">
        <div className="container__home">
          <HeaderLoggedOut />
        </div>
      </div>
    </Page>
  )
}

export default SignIn
