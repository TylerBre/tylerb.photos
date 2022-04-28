import React from "react"
import css from "./storePrintCard.module.css"
import GatsbyImage from "gatsby-image"
import { Link } from "gatsby"

export const StorePrintCard = ({ product }) => {
  const featuredImage = product?.images[0] ?? null
  if (!featuredImage) return null
  return (
    <div className={css.cardWrapper}>
      <Link to={`/store/${product.slug}`} className={css.cardLink}>
        <figure className="kg-card kg-image-card">
          <GatsbyImage
            className="kg-image"
            fluid={featuredImage.fileLocal.childImageSharp.fluid}
          />
        </figure>
        <div className={css.hoverOverlay}></div>
        {product?.name && <p>{product.name}</p>}
      </Link>
    </div>
  )
}

export default StorePrintCard
