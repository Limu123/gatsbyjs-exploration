import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const Wrapper = styled.div`
  background: green;
  max-width: 660px;
  margin: 0 auto;
  font-family: sans-serif;
  padding: 20px;
`;

const Template = ({data, location, children}) => {
  let header

  console.log(data);

  if (location.pathname === '/') {
    header = (
      <h1>
        <Link to={'/'} >
          Gatsby Starter Blog
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3>
        <Link to={'/'}>
          Gatsby Starter Blog
        </Link>
      </h3>
    )
  }
  return (
    <Wrapper>
      {header}
      {children()}
    </Wrapper>
  )
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template

export const testQuery = graphql`
  query TestQuery {
    site {
      siteMetadata {
        title
      }
    }
    allFile {
      edges {
        node {
          id
        }
      }
    }
  }
`
