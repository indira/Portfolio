import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState, useContext } from "react"
import moment from "moment-timezone"
import { Link } from "react-router-dom"
import Page from "../Page/Page"
import DispatchContext from "../../DispatchContext"

function SinglePost() {
  const appDispatch = useContext(DispatchContext)
  const { id } = useParams()
  const [post, setPost] = useState()
  const [author, setAuthor] = useState()
  const [idAut, setID] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [date, setDate] = useState()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_ROOT}posts/${id}?_embed`)
        setPost(response.data)
        setID(response.data.author)
        setIsLoading(false)
        const pstDate = moment(response.data.date).tz("America/Los_Angeles").format("MM.DD.YY")
        setDate(pstDate)
        const authorResponse = await axios.get(`${process.env.REACT_APP_API_ROOT}users/${response.data.author}`)
        setAuthor(authorResponse.data.name)
      } catch (e) {
        appDispatch({ type: "flashMessage", value: { text: e.message, type: "error" } })
      }
    }
    fetchPost()
  })

  if (isLoading)
    return (
      <Page title="...">
        <div className="features">
          <div className="Loading">Loading...</div>
        </div>
      </Page>
    )
  return (
    <Page title={post.title.rendered}>
      <div className="wrapper wrapper-border">
        <div className="features">
          <div className="features__single">
            <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div className="metabox">
              <p>
                Posted by <Link to={`/profile/${idAut}`}>{author}</Link> on {date}
              </p>
            </div>
            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default SinglePost
