import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../../components/layout"

export const PrintDetailPage = ({ data }) => {
  return (
    <Layout title={data.site.siteMetadata.title}>
      <h2>Print Detail Page</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}

const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    swellProduct(slug: { eq: $slug }) {
      name
      slug
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <PrintDetailPage data={data} {...props} />}
  />
)
