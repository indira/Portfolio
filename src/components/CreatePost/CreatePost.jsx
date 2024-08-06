import React, { useState, useContext } from "react"
import Page from "../Page/Page"
import Axios from "axios"
import StateContext from "../../StateContext"

function CreatePost() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const appState = useContext(StateContext)

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
        console.log(response.data)
      } catch (e) {
        if (e.response && e.response.status === 403) {
          console.log("Permission denied or invalid token")
        } else {
          console.log("There was a problem", e.message)
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
          <input autoFocus name="title" id="post-title" type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="" autoComplete="off" />
          <label htmlFor="post-body">Post Content</label>
          <textarea name="body" id="post-body" value={content} onChange={e => setContent(e.target.value)} type="text" />
          <button className="button button--blue">Create Post</button>
        </form>
      </div>
    </Page>
  )
}

export default CreatePost
