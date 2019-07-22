import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactform"
import DetailCard from "../components/detailcard"
import 'bootstrap/dist/css/bootstrap.css'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="landingPage">
      <h1>open Summer of code is going international!</h1>
      <p>We are going for</p>
      <ul>
        <li>
          more chapters
        </li>
        <li>
          more talent
        </li>
        <li> 
          and even more open source projects!
        </li>
      </ul>
    </div>
    <div className="details">
      <h2>Easily start your own chapter!</h2>
      <p>To let chapter managers organize their own oSoc editions with ease, we have created </p>
      <div /* FLEXCONTAINER*/ >

        <DetailCard title={"Guidelines"} text={"Guide you between the lines"} />
        <DetailCard title={"Dashboard"} text={"Because automated things saves you (lots!) of time!"} />


    </div>
    </div>
    <div className="contactUs">
      <h1>Contact us!</h1>
      <p>Whether you have any questions, are interested in starting your own chapter or just want to say hi... Just send us a message!</p>
      <ContactForm/>
    </div>
  </Layout>
)

export default IndexPage
