import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'

const BlogIndex = ({data}) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges

  return (
    <div>
      <Helmet title={siteTitle} />
      <Bio />
      {posts.map(post => {
        if (post.node.path !== '/404/') {
          console.log(post.node.frontmatter.cover && post.node.frontmatter.cover.childImageSharp.responsiveSizes.src);
          return (
            <div key={post.node.frontmatter.path}>
            <div><img src={post.node.frontmatter.cover && post.node.frontmatter.cover.childImageSharp.responsiveSizes.src}/></div>
              <h3>
                <Link to={post.node.frontmatter.path} >
                  {post.node.frontmatter.title}
                </Link>
              </h3>
              <small>{post.node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
          )
        }
      })}
    </div>
  ) 
}


BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            title
            cover {
              childImageSharp {
                responsiveSizes {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                  originalImg
                  originalName
                }
              }
            }
          }
        }
      }
    }
  }
`
