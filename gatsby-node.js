const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogs = await graphql(
    `{
        alvablog: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fields: {slug: {regex: "/alvablogs/"}}}) {
          totalCount
        },
        fishblog: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fields: {slug: {regex: "/fishblogs/"}}}) {
          totalCount
        }
    }`
  )

  if (blogs.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create alvablog-list pages
  let blogposts = blogs.data.alvablog.totalCount;
  const postsPerPage = 10;
  let numPages = Math.ceil(blogposts / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/alvablog` : `/alvablog/${i + 1}`,
      component: path.resolve("./src/templates/alvablog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  });

  // Create fishblog-list pages
  blogposts = blogs.data.fishblog.totalCount;
  numPages = Math.ceil(blogposts / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/fishblog` : `/fishblog/${i + 1}`,
      component: path.resolve("./src/templates/fishblog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}