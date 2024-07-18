import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Page from "../Page/Page"

const PortfolioPosts = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    // Fetch posts
    const fetchPosts = async () => {
      try {
        let url = `${process.env.REACT_APP_API_ROOT}posts?categories=6`
        const response = await axios.get(url)
        // Sort posts by date and time in ascending order
        const sortedPosts = response.data.sort((a, b) => new Date(a.date) - new Date(b.date))
        setPosts(sortedPosts)
        setIsLoading(false)
      } catch (e) {
        console.log(e.response?.data?.message || e.message)
      }
    }

    fetchPosts()
  }, [])
  return (
    <Page title="Portfolio">
      <div className="wrapper  wrapper__border">
        <div className="features">
          <div className="features__inner">
            {!isLoading ? (
              posts.map(post => (
                <div key={post.id} className="features__item">
                  <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  <Link to={`/posts/${post.id}`}>
                    <button className="button button--blue">Continue Reading</button>
                  </Link>
                </div>
              ))
            ) : (
              <div className="Loading">Loading...</div>
            )}
          </div>
        </div>
      </div>
    </Page>
  )
}

export default PortfolioPosts
