import React from "react"
import { graphql } from "gatsby"
import Header from '../components/header'
import Parallax from '../components/parallax'
import Footer from '../components/footer'
import Container from '../components/container'
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default class AlvaBlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
        <div>
            <Header title="alvachien.com"></Header>
            <Parallax title="Your title" image="bg2.jpg"></Parallax>
            <Container>
                <div>
                    <h1 css={css`display: inline-block;border-bottom: 1px solid;`}>
                      Alva Blogs
                    </h1>
                    {posts.map(({ node }) => {
                        return <div key={node.id}>
                            <h3>
                                {node.frontmatter.title}{" "}
                                <span css={css`color: #bbb;`}>
                                    — {node.frontmatter.date}
                                </span>
                            </h3>
                            <p>{node.excerpt}</p>
                        </div>
                    })}
                </div>
            </Container>
            <Footer />
        </div>
    )
  }
}

export const acblogListQuery = graphql`
  query acblogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fields: {slug: {regex: "/alvablogs/"}}}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`