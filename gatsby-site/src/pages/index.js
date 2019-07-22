import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="landingPage">
      <h1>open Summer of code is going international!</h1>
      <p>We are going for even</p>
      <ul>
        <li>
          More chapters
        </li>
        <li>
          More talent
        </li>
        <li> 
          And even more open source projects!
        </li>
      </ul>
    </div>
    <div className="numbers">
      Belgium and Spain combined or something 
    </div>
    <div className="details">
      Details
    </div>
    <div className="contactForm">
      <form>
        <label>Name:</label>
        <label>E-mail:</label>
        <label>Message:</label>
      </form>

    </div>
  </Layout>
)

export default IndexPage
