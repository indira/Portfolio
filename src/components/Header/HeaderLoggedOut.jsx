import React, { useEffect, useContext } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { CSSTransition } from "react-transition-group"
import { useImmerReducer } from "use-immer"
import DispatchContext from "../../DispatchContext"

const HeaderLoggedOut = () => {
  const appDispatch = useContext(DispatchContext)
  const navigate = useNavigate()

  const initialState = {
    loginField: {
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
    isPasswordVisible: false,
    submitCount: 0
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "loginFieldImmediately":
        draft.loginField.hasError = false
        draft.loginField.value = action.value
        if (draft.loginField.value.length > 40) {
          draft.loginField.hasError = true
          draft.loginField.message = "Username or Email cannot exceed 40 characters."
        }
        if (draft.loginField.value.length < 3) {
          draft.loginField.hasError = true
          draft.loginField.message = "Username or Email cannot be less then 3 characters."
        }
        if (!draft.loginField.hasError && !action.noRequest) {
          draft.loginField.checkCount++
        }
        break
      case "loginFieldUniqueResults":
        if (action.value === true) {
          draft.loginField.isUnique = false
          draft.loginField.hasError = false
        } else {
          draft.loginField.hasError = true
          draft.loginField.isUnique = true
          draft.loginField.message = "Username or Email is not available in our database."
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

      case "togglePasswordVisibility":
        draft.isPasswordVisible = !draft.isPasswordVisible
        break

      case "submitForm":
        if (!draft.loginField.hasError && !draft.password.hasError) {
          draft.submitCount++
        }
        break

      default:
        break
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  useEffect(() => {
    if (state.password.value) {
      const delay = setTimeout(() => dispatch({ type: "passwordAfterDelay" }), 800)
      return () => clearTimeout(delay)
    }
  }, [state.password.value, dispatch])

  useEffect(() => {
    if (state.loginField.checkCount) {
      async function fetchResults() {
        try {
          let url
          if (state.loginField.isEmail) {
            url = `${process.env.REACT_APP_API_ROOT}check-email?email=${state.loginField.value}`
            const response = await axios.get(url)
            console.log(response.data.exists, "email")
            dispatch({ type: "loginFieldUniqueResults", value: response.data.exists })
          } else {
            url = `${process.env.REACT_APP_API_ROOT}check-username?username=${state.loginField.value}`
            const response = await axios.get(url)
            console.log(response.data.exists, "username")
            dispatch({ type: "loginFieldUniqueResults", value: response.data.exists })
          }
        } catch (e) {
          console.log("There was a problem or the request was canceled.")
        }
      }

      fetchResults()
    }
  }, [state.loginField.isEmail, state.loginField.checkCount, state.loginField.value, dispatch])

  useEffect(() => {
    if (state.submitCount) {
      async function fetchResults() {
        try {
          const url = `${process.env.REACT_APP_API_AUTH_TOKEN}`
          const response = await axios.post(url, { username: state.loginField.value, password: state.password.value })
          if (response.data) {
            appDispatch({ type: "login", data: response.data })
            navigate(`/`)
          } else {
            console.log("Incorrect username/email and password")
          }
        } catch (e) {
          console.log("Something went wrong", e.message)
        }
      }
      fetchResults()
    }
  }, [state.submitCount, state.loginField.value, state.password.value, appDispatch, navigate])

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: "loginFieldImmediately", value: state.loginField.value })
    dispatch({ type: "loginAfterDelay", value: state.loginField.value })
    dispatch({ type: "passwordImmediately", value: state.password.value })
    dispatch({ type: "passwordAfterDelay", value: state.password.value })
    dispatch({ type: "submitForm" })
  }

  return (
    <div className="form">
      <div className="site-header__logo">
        <Link to="/" className="site-header__logo headline--medium">
          LOG-IN
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <CSSTransition in={state.loginField.hasError} timeout={300} classNames="fade" unmountOnExit>
          <div className="alert">{state.loginField.message}</div>
        </CSSTransition>
        <input onChange={e => dispatch({ type: "loginFieldImmediately", value: e.target.value })} name="loginField" type="text" placeholder="Username or Email Address" autoComplete="off" />
        <div className="password-container" style={{ position: "relative" }}>
          <CSSTransition in={state.password.hasError} timeout={300} classNames="fade" unmountOnExit>
            <div className="alert">{state.password.message}</div>
          </CSSTransition>
          <input onChange={e => dispatch({ type: "passwordImmediately", value: e.target.value })} name="password" type={state.isPasswordVisible ? "text" : "password"} placeholder="Password" />
          <i className="toggle-password" style={{ cursor: "pointer", position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }} onClick={() => dispatch({ type: "togglePasswordVisibility" })}>
            <FontAwesomeIcon icon={state.isPasswordVisible ? faEyeSlash : faEye} />
          </i>
        </div>

        <button className="button button--blue">Sign In</button>
      </form>
    </div>
  )
}

export default HeaderLoggedOut
