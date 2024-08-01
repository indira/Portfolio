import React, { useEffect, useContext } from "react"
import axios from "axios"
import Page from "../Page/Page"
import { CSSTransition } from "react-transition-group"
import { useImmerReducer } from "use-immer"
import DispatchContext from "../../DispatchContext"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const appDispatch = useContext(DispatchContext)
  const navigate = useNavigate()
  const initialState = {
    username: {
      value: "",
      hasError: false,
      message: "",
      isUnique: false,
      checkCount: 0
    },
    email: {
      value: "",
      hasError: false,
      message: "",
      isUnique: false,
      checkCount: 0
    },
    password: {
      value: "",
      hasError: false,
      message: ""
    },
    submitCount: 0
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "usernameImmediately":
        draft.username.hasError = false
        draft.username.value = action.value
        if (draft.username.value.length > 30) {
          draft.username.hasError = true
          draft.username.message = "Username cannot exceed 30 characters"
        }
        if (draft.username.value && !/^([a-zA-Z0-9]+)$/.test(draft.username.value)) {
          draft.username.hasError = true
          draft.username.message = "Username can only contain letters and numbers"
        }
        break

      case "usernameAfterDelay":
        if (draft.username.value.length < 3) {
          draft.username.hasError = true
          draft.username.message = "Username must be at least 3 characters"
        }
        if (!draft.username.hasError && !action.noRequest) {
          draft.username.checkCount++
        }
        break

      case "usernameUniqueResults":
        if (action.value) {
          draft.username.hasError = true
          draft.username.isUnique = false
          draft.username.message = "Username is already taken"
        } else {
          draft.username.hasError = false
          draft.username.isUnique = true
        }
        break

      case "emailImmediately":
        draft.email.hasError = false
        draft.email.value = action.value
        break

      case "emailAfterDelay":
        if (!/^\S+@\S+$/.test(draft.email.value)) {
          draft.email.hasError = true
          draft.email.message = "You must provide a valid email address."
        }
        if (!draft.email.hasError && !action.noRequest) {
          draft.email.checkCount++
        }
        break

      case "emailUniqueResults":
        if (action.value) {
          draft.email.hasError = true
          draft.email.isUnique = false
          draft.email.message = "That email is already being used"
        } else {
          draft.email.isUnique = true
        }
        break

      case "passwordImmediately":
        draft.password.hasError = false
        draft.password.value = action.value
        if (draft.password.value.length > 50) {
          draft.password.hasError = true
          draft.password.message = "Password cannot exceed 50 characters."
        }
        break

      case "passwordAfterDelay":
        if (draft.password.value.length < 8) {
          draft.password.hasError = true
          draft.password.message = "Password must be at least 8 characters."
        }
        break

      case "submitForm":
        if (!draft.username.hasError && draft.username.isUnique && !draft.email.hasError && draft.email.isUnique && !draft.password.hasError) {
          draft.submitCount++
        }
        break

      default:
        break
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    if (state.username.value) {
      const delay = setTimeout(() => dispatch({ type: "usernameAfterDelay" }), 800)
      return () => clearTimeout(delay)
    }
  }, [state.username.value, dispatch])

  useEffect(() => {
    if (state.email.value) {
      const delay = setTimeout(() => dispatch({ type: "emailAfterDelay" }), 800)
      return () => clearTimeout(delay)
    }
  }, [state.email.value, dispatch])

  useEffect(() => {
    if (state.password.value) {
      const delay = setTimeout(() => dispatch({ type: "passwordAfterDelay" }), 800)
      return () => clearTimeout(delay)
    }
  }, [state.password.value, dispatch])

  useEffect(() => {
    if (state.username.checkCount) {
      async function fetchResults() {
        try {
          let url = `${process.env.REACT_APP_API_ROOT}check-username?username=${state.username.value}`
          const response = await axios.get(url)
          dispatch({ type: "usernameUniqueResults", value: response.data.exists })
        } catch (e) {
          console.log("There was a problem or the request was canceled.")
        }
      }
      fetchResults()
    }
  }, [state.username.checkCount, state.username.value, dispatch])

  useEffect(() => {
    if (state.email.checkCount) {
      async function fetchResults() {
        try {
          let url = `${process.env.REACT_APP_API_ROOT}check-email?email=${state.email.value}`
          const response = await axios.get(url)
          dispatch({ type: "emailUniqueResults", value: response.data.exists })
        } catch (e) {
          console.log("There was a problem or the request was canceled.")
        }
      }
      fetchResults()
    }
  }, [state.email.checkCount, state.email.value, dispatch])

  useEffect(() => {
    if (state.submitCount) {
      async function fetchResults() {
        try {
          const response = await axios.post(`${process.env.REACT_APP_API_ROOT}register`, { username: state.username.value, email: state.email.value, password: state.password.value })
          if (response.data) {
            const url = `${process.env.REACT_APP_API_AUTH_TOKEN}`
            const tokenResponse = await axios.post(url, { username: state.username.value, password: state.password.value })
            if (tokenResponse.data) {
              appDispatch({ type: "login", data: tokenResponse.data })
              navigate(`/`)
            } else {
              console.log("Incorrect username and password")
            }
          } else {
            console.log("Registration failed")
          }
        } catch (e) {
          console.log("Something went wrong", e.message)
        }
      }
      fetchResults()
    }
  }, [state.submitCount, state.username.value, state.email.value, state.password.value, appDispatch, navigate])

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: "usernameImmediately", value: state.username.value })
    dispatch({ type: "usernameAfterDelay", value: state.username.value, noRequest: true })
    dispatch({ type: "emailImmediately", value: state.email.value })
    dispatch({ type: "emailAfterDelay", value: state.email.value, noRequest: true })
    dispatch({ type: "passwordImmediately", value: state.password.value })
    dispatch({ type: "passwordAfterDelay", value: state.password.value })
    dispatch({ type: "submitForm" })
  }

  return (
    <Page title="RegisterHome">
      <div className="container">
        <div className="container__left">
          <h4 className="container__left--title">Register here!</h4>
          <p className="container__left--paragraph">Register here to become a member and share your thoughts and ideas on the app.</p>
        </div>
        <div className="container__right">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username-register">
              <small>Username</small>
            </label>
            <CSSTransition in={state.username.hasError} timeout={300} classNames="fade" unmountOnExit>
              <div className="alert">{state.username.message}</div>
            </CSSTransition>
            <input onChange={e => dispatch({ type: "usernameImmediately", value: e.target.value })} id="username-register" name="username" type="text" placeholder="Pick a username" autoComplete="off" />

            <label htmlFor="email-register" className="text-muted mb-1">
              <small>Email</small>
            </label>
            <CSSTransition in={state.email.hasError} timeout={300} classNames="fade" unmountOnExit>
              <div className="alert">{state.email.message}</div>
            </CSSTransition>
            <input onChange={e => dispatch({ type: "emailImmediately", value: e.target.value })} id="email-register" name="email" type="text" placeholder="you@example.com" autoComplete="off" />

            <label htmlFor="password-register" className="text-muted mb-1">
              <small>Password</small>
            </label>
            <CSSTransition in={state.password.hasError} timeout={300} classNames="fade" unmountOnExit>
              <div className="alert">{state.password.message}</div>
            </CSSTransition>
            <input onChange={e => dispatch({ type: "passwordImmediately", value: e.target.value })} id="password-register" name="password" type="password" placeholder="Create a password" autoComplete="off" />
            <button className="button button--white" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </Page>
  )
}

export default Register
