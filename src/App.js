import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
//Calling the stylesheet
import "../src/Styles/App.scss"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import HomeGuest from "./components/Home/HomeGuest"
import Register from "./components/Register/Register"
import Home from "./components/Home/Home"
import AboutMe from "./components/AboutMe/AboutMe"
import FlashMessages from "./components/FlashMessages/FlashMessages"
import { useImmerReducer } from "use-immer"
import SignIn from "./components/SignIn/SingnIn"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import md5 from "md5"
import Portfolio from "./components/Portfolio/Portfolio"
import PortfolioPosts from "./components/Portfolio/PortfolioPosts"
import Profile from "./components/Profile/Profile"
import Posts from "./components/Posts/Posts"
import SinglePost from "./components/Posts/SinglePost"
function App() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("IndProtToken")),
    flashMessages: [],
    user: {
      token: localStorage.getItem("IndProtToken"),
      username: localStorage.getItem("IndProtUsername"),
      avatar: localStorage.getItem("IndProtAvatar")
    }
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        draft.user = action.data
        return
      case "updateAvatar":
        draft.user.avatar = action.avatar
        return
      case "logout":
        draft.loggedIn = false
        return
        case "flashMessage":
          draft.flashMessages.push(action.value);
          return;
      default:
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    if (state.loggedIn) {
      const email = state.user.user_email
      if (email) {
        try {
          const emailHash = md5(email.trim().toLowerCase())
          const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?s=96`
          localStorage.setItem("IndProtAvatar", gravatarUrl)
          dispatch({ type: "updateAvatar", avatar: gravatarUrl })
          localStorage.setItem("IndProtToken", state.user.token)
          localStorage.setItem("IndProtUsername", state.user.user_display_name)
        } catch (error) {
          console.error("Error generating Gravatar URL:", error)
        }
      }
    } else {
      localStorage.removeItem("IndProtToken")
      localStorage.removeItem("IndProtUsername")
      localStorage.removeItem("IndProtAvatar")
    }
  },[state.loggedIn,state.user.token,state.user.user_display_name,state.user.user_email, dispatch])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
        <FlashMessages messages={state.flashMessages} />
          <Header />
          <Routes>
            <Route path="/" element={state.loggedIn ? <HomeGuest /> : <Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/profile/:username/*" element={<Profile />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolioposts" element={<PortfolioPosts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<SinglePost />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
