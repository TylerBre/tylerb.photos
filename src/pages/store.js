import Layout from "../components/layout"
import { graphql, StaticQuery } from "gatsby"
import React from "react"
import css from "./store.module.css"

import "../utils/normalize.css"
import "../utils/css/screen.css"
import StorePrintCard from "../components/storePrintCard"

const StorePage = ({ data }) => {
  return (
    <Layout title={data.site.siteMetadata.title}>
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>Prints</h2>
          <pre>{JSON.stringify(data.allSwellProduct, null, 2)}</pre>
          {data?.allSwellProduct?.nodes && (
            <div className={css.productCardList}>
              {data.allSwellProduct.nodes.map(node => (
                <StorePrintCard product={node} key={node.id} />
              ))}
            </div>
          )}
          {/*<figure className="kg-card kg-image-card">*/}
          {/*  <Img*/}
          {/*    fluid={data.formALine.childImageSharp.fluid}*/}
          {/*    className="kg-image"*/}
          {/*  />*/}
          {/*  <figcaption>We'll be right back.</figcaption>*/}
          {/*</figure>*/}
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
    allSwellProduct {
      nodes {
        id
        name
        slug
        date_created
        date_updated
        delivery
        description
        #        sale_price
        price
        images {
          fileLocal {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
