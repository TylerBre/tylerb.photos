import Layout from "../components/layout"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const StorePage = ({ data }) => {
  return (
    <Layout title={data.site.siteMetadata.title}>
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>Purchase Signed Prints & NFT's</h2>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.formALine.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>We'll be right back.</figcaption>
          </figure>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    formALine: file(relativePath: { eq: "3-8-21-eos650-015.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => <StorePage data={data} {...props} />}
  />
)
