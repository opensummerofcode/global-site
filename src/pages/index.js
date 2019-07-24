import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Brag from "../components/brag"
import HeroAnimation from "../components/heroanimation"
import Footer from "../components/footer"
import 'bootstrap/dist/css/bootstrap.css'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="landingPage">
      <h1>Innovative open source projects, made by incredibly motivated students, coaches & organisations... all over the world!</h1>
      <HeroAnimation />
    </div>

    <div className="video flex-container">
      <div className="flex-child text">
      <p>A programme that provides students the <strong>training</strong>, <strong>network</strong> and <strong>support</strong> necessary to transform <strong>open innovation projects</strong> into powerful real-world services for real <strong>companies</strong>.</p>
      <a className="button" href="/">Get in touch -- we have a set up kit</a>
      </div>
      
      <div className="flex-child video">
      <div style={{padding: "56.25% 0 0 0", position:"relative"}}>
        <iframe src="https://player.vimeo.com/video/188284459" style={{position:"absolute", top: "0", left:"0", width:"100%", height:"100%" }} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>


    <div className="numbers">
      <h1>Some numbers</h1>
      <div className=" header-numbers grid-x">
      <h2 className="small-12 medium-12 cell">Belgium</h2>
      {/* <a className="button extern" href="https://osoc.be">oSoc Belgium</a> */}
      </div>  

        <div className="grid-x flex-container number-wrapper">
          <Brag start_text={"For over"} num={"9"} end_text={"Editions"} col={"#f14a3b"}></Brag>
          <Brag start_text={"More than"} num={"322"} end_text={"Students"} col={"#1de1ae"}></Brag>
          <Brag start_text={"Built"} num={"83"} end_text={"Projects"} col={"fcb70f"}></Brag>
          <Brag start_text={"With"} num={"123"} end_text={"Partners"} col={"#1e1d36"}></Brag>
          <Brag start_text={"and"} num={"54"} end_text={"Universities"} col={"#f14a3b"}></Brag>
          <Brag start_text={"coached by"} num={"67"} end_text={"experts"} col={"#1de1ae"}></Brag>

        </div>
        
        <div className=" header-numbers grid-x">
      <h2 className="small-12 medium-12 cell">Spain</h2> 
      {/* <a className="button extern"  href="https://osoc.be">oSoc Spain</a> */}
      </div>
      <div className="grid-x flex-container number-wrapper">
        { /* Todo: Color can be set automatically with css*/}
          <Brag start_text={"For over"} num={"9"} end_text={"Editions"} col={"#f14a3b"}></Brag>
          <Brag start_text={"More than"} num={"322"} end_text={"Students"} col={"#1de1ae"}></Brag>
          <Brag start_text={"Built"} num={"83"} end_text={"Projects"} col={"fcb70f"}></Brag>
          <Brag start_text={"With"} num={"123"} end_text={"Partners"} col={"#1e1d36"}></Brag>
          <Brag start_text={"and"} num={"54"} end_text={"Universities"} col={"#f14a3b"}></Brag>
          <Brag start_text={"coached by"} num={"67"} end_text={"experts"} col={"#1de1ae"}></Brag>

        </div>
    </div>
    
    {/* <div className="contactUs">
      <h1>Contact us!</h1>
      <p>Whether you have any questions, are interested in starting your own chapter or just want to say hi... Just send us a message!</p>
      <ContactForm/>
    </div> */}
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfclUjrf-pxhE37RXBvUPoN-A6NDpX-oBcxlkjEk3DgLo1tjA/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    <Footer />
  </Layout>
)

export default IndexPage
