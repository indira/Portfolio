import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Page from "../Page/Page"
import Axios from "axios"
import StateContext from "../../StateContext"
import DispatchContext from "../../DispatchContext"

function CreatePost() {
  const appDispatch = useContext(DispatchContext)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const appState = useContext(StateContext)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    async function fetchResult() {
      try {
        const url = `${process.env.REACT_APP_API_ROOT}posts`
        const response = await Axios.post(
          url,
          {
            title: title,
            content: content,
            status: "publish"
          },
          {
            headers: {
              Authorization: `Bearer ${appState.user.token}`,
              "Content-Type": "application/json"
            }
          }
        )
        const postId = response.data.id
        navigate(`/posts/${postId}`)
        appDispatch({ type: "flashMessage", value: { text: "Congratulations, you successfully created a post." } })
      } catch (e) {
        if (e.response && e.response.status === 403) {
          appDispatch({ type: "flashMessage", value: { text: "Permission denied or invalid token" } })
        } else {
          appDispatch({ type: "flashMessage", value: { text: "There was a problem." } })
        }
      }
    }
    fetchResult()
  }

  return (
    <Page title="Create New Post">
      <div className="container__narrow wrapper wrapper__border">
        <form onSubmit={handleSubmit}>
          <label htmlFor="post-title">Post Title</label>
          <input onChange={e => setTitle(e.target.value)} autoFocus name="title" id="post-title" type="text" value={title} placeholder="" autoComplete="off" />
          <label htmlFor="post-body">Post Content</label>
          <textarea name="body" id="post-body" value={content} onChange={e => setContent(e.target.value)} type="text" />
          <button className="button button--blue">Create Post</button>
        </form>
      </div>
    </Page>
  )
}

export default CreatePost
