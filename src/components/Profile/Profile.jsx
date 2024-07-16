import React, { useEffect, useState, useContext } from "react"
import Page from "../Page/Page"
import axios from "axios"
import { useParams } from "react-router-dom"
import StateContext from "../../StateContext"
import ProfilePosts from "./ProfilePosts"

function Profile() {
  const appState = useContext(StateContext)
  const { username } = useParams()
  const [profileData, setProfileData] = useState({
    counts: { postCount: "" }
  })
  const [profileData1, setProfileData1] = useState({
    avatar_urls: { 96: "https://gravatar.com/avatar/placeholder?s=128" },
    name: "..."
  })
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_ROOT}posts?author=${username}`)
        setProfileData(response.data)
        const authorResponse = await axios.get(`${process.env.REACT_APP_API_ROOT}users/${username}`)
        setProfileData1(authorResponse.data)
      } catch (e) {
        console.log("Sorry, something went wrong in profile.")
      }
    }
    fetchData()
  }, [appState.user.token, username])

  return (
    <Page title="Profile Screen">
      <div className="wrapper wrapper__border">
        <div className="profile-container">
          <div className="profile-container__header">
            <div className="profile-container__header--img">
              <img className="profile-container__avatar" src={profileData1.avatar_urls[96]} alt="avatar" />
              Posts by: {profileData1.name.replace(/\b\w/g, char => char.toUpperCase())}
            </div>
            <div>
              {" "}
              No of posts: <span className="profile-container__header-no">{profileData.length}</span>
            </div>
          </div>
          <ProfilePosts />
        </div>
      </div>
    </Page>
  )
}

export default Profile
