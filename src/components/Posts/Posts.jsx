import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Page from "../Page/Page"

const PortfolioPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Fetch posts
    const fetchPosts = async () => {
      try {
        let url = `${process.env.REACT_APP_API_ROOT}posts`
        const response = await axios.get(url)
        console.log(response.data)
        setPosts(response.data)
      } catch (e) {
        console.log(e.response?.data?.message || e.message)
      }
    }

    fetchPosts()
  }, [])

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
