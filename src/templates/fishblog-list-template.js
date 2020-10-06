import React from "react"
import { graphql } from "gatsby"
import Header from '../components/header'
import Parallax from '../components/parallax'
import Footer from '../components/footer'
import Container from '../components/container'
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default class FishBlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <div>
        <Header title="alvachien.com"></Header>
        <Parallax title="Your title" image="bg2.jpg"></Parallax>
        <Container>
          <div>
            <h1 css={css`display: inline-block;border-bottom: 1px solid;`}>
              Fish Blogs
            </h1>
            {posts.map(({ node }) => {
              return (<div key={node.id}>
                <h3 css={css`margin-bottom: ${rhythm(1 / 4)};`}>
                  {node.frontmatter.title}{" "}
                  <span css={css`color: #bbb;`}>
                    — {node.frontmatter.date}
                  </span>
                </h3>
              <p>{node.excerpt}</p>
              </div>)
            })}
          </div>
        </Container>
        <Footer />
      </div>
    )
  }
}

export const fishblogListQuery = graphql`
  query fishblogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fields: {slug: {regex: "/fishblogs/"}}}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`