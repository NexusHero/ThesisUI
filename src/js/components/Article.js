import React from "react"
import { Link } from "react-router"

export default class Article extends React.Component {
  render() {
    const { title } = this.props
    return (
      <div>
        <h4>{ title }</h4>
        <p>dies ist ein Test....</p>
        <Link to="/archives/some-article">More Info</Link>
      </div>
    )
  }
}
