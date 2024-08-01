import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Page from "../Page/Page"
import DispatchContext from "../../DispatchContext"

const PortfolioPosts = () => {
  const appDispatch = useContext(DispatchContext)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Fetch posts
    const fetchPosts = async () => {
      try {
        let url = `${process.env.REACT_APP_API_ROOT}posts`
        const response = await axios.get(url)
        setPosts(response.data)
      } catch (e) {
        appDispatch({ type: "flashMessage", value: { text: e.message, type: "error" } })
      }
    }

    fetchPosts()
  }, [appDispatch])

  return (
    <Page title="Posts">
      <div className="wrapper  wrapper__border">
        <div className="features">
          <div className="features__inner">
            {posts.length > 0
              ? posts.map(post => (
                  <div key={post.id} className="features__item">
                    <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    <Link to={`/posts/${post.id}`}>
                      <button className="button button--blue">Continue Reading</button>
                    </Link>
                  </div>
                ))
              : "Loading....."}
          </div>
        </div>
      </div>
    </Page>
  )
}

export default PortfolioPosts
