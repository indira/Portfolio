import React, { useEffect } from "react"

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | INDIRA'S HOME`
    window.scroll(0, 0)
  }, [props.title])
  return <div>{props.children}</div>
}

export default Page
