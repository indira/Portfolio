import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"
import moment from "moment-timezone"
function ProfilePosts() {
  const { username } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [avatar, setAvater] = useState("https://gravatar.com/avatar/placeholder?s=128")
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_ROOT}posts?author=${username}`)
        setPosts(response.data)
        setIsLoading(false)
        const authorResponse = await axios.get(`${process.env.REACT_APP_API_ROOT}users/${username}`)
        setAvater(authorResponse.data.avatar_urls[96])
      } catch (e) {
        console.log("Sorry, something went wrong in profile.")
      }
    }
    fetchData()
  }, [username])
  return (
    <>
      {!isLoading  ? (
        posts.map(post => {
          const pstDate = moment(post.date).tz("America/Los_Angeles").format("MM.DD.YY")
          return (
            <div className="profile-container__posts" key={post.id}>
              <div className="profile-container__posts-img">
              <img className="profile-container__avatar" src={avatar} alt="avatar" />
               <span > {pstDate} </span>
              </div>
              <Link to={`/posts/${post.id}`}>
                <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </Link>
            </div>
          )
        })
      ) : (
        <div className="Loading">Loading...</div>
      )}
    </>
  )
}

export default ProfilePosts
