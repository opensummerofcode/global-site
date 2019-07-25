import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="landingPage">
      <h1>open Summer of Code is going international!</h1>
      <p>New chapters or something</p>
      <p>yeay, fun!</p>
    </div>
    <div className="numbers">
      Belgium and Spain combined or something 
    </div>
    <div className="details">
      Details
    </div>
  </Layout>
)

export default IndexPage
