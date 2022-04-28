export interface GatsbyChildImageShardFluid {
  childImageSharp: {
    fluid: GatsbyImageSharpFluid
  }
}

export interface GatsbyImageSharpFluid {
  base64: string
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}
