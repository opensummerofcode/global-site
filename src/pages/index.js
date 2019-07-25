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
      <h1>Innovative open source projects, made by incredibly motivated students, coaches & organisations... and we want to spread it to the whole world!</h1>
      <HeroAnimation />
    </div>

    <div className="video flex-container">
      <div className="flex-child text">
      <p>A programme that provides students the <strong>training</strong>, <strong>network</strong> and <strong>support</strong> necessary to transform <strong>open innovation projects</strong> into powerful real-world services for real <strong>companies</strong>.</p>
      <a className="button extern" href="https://docs.google.com/forms/d/e/1FAIpQLSfclUjrf-pxhE37RXBvUPoN-A6NDpX-oBcxlkjEk3DgLo1tjA/viewform" target="_blank">Let's get in touch</a>
      </div>
      
      <div className="flex-child video">
      <div style={{padding: "56.25% 0 0 0", position:"relative"}}>
        <iframe src="https://player.vimeo.com/video/188284459" style={{position:"absolute", top: "0", left:"0", width:"100%", height:"100%" }} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
    </div>


    <div className="numbers">
      <div className=" header-numbers grid-x">
      <h1 className="small-12 medium-12 cell">oSoc Belgium</h1>
      {/* <a className="button extern" href="https://osoc.be">oSoc Belgium</a> */}
      </div>  

        <div className="grid-x flex-container number-wrapper">
          <Brag start_text={"For over"} num={"9"} end_text={"Editions"} col={"#f14a3b"}></Brag>
          <Brag start_text={"More than"} num={"322"} end_text={"Students"} col={"#1de1ae"}></Brag>
          <Brag start_text={"Built"} num={"83"} end_text={"Projects"} col={"#fcb70f"}></Brag>
          <Brag start_text={"With"} num={"123"} end_text={"Partners"} col={"#1e1d36"}></Brag>
          <Brag start_text={"and"} num={"54"} end_text={"Universities"} col={"#f14a3b"}></Brag>
          <Brag start_text={"coached by"} num={"67"} end_text={"experts"} col={"#1de1ae"}></Brag>

        </div>
        
        <div className=" header-numbers grid-x">
      <h1 className="small-12 medium-12 cell">oSoc Spain</h1> 
      {/* <a className="button extern"  href="https://osoc.be">oSoc Spain</a> */}
      </div>
      <div className="grid-x flex-container number-wrapper">
        { /* Todo: Color can be set automatically with css*/}
          <Brag start_text={"For over"} num={"2"} end_text={"Editions"} col={"#f14a3b"}></Brag>
          <Brag start_text={"More than"} num={"20"} end_text={"Students"} col={"#1de1ae"}></Brag>
          <Brag start_text={"Built"} num={"9"} end_text={"Projects"} col={"#fcb70f"}></Brag>
          <Brag start_text={"With"} num={"8"} end_text={"Partners"} col={"#1e1d36"}></Brag>
          <Brag start_text={"and"} num={"2"} end_text={"Universities"} col={"#f14a3b"}></Brag>
          <Brag start_text={"coached by"} num={"11"} end_text={"experts"} col={"#1de1ae"}></Brag>

        </div>
    </div>
    
    {/* <div className="contactUs">
      <h1>Contact us!</h1>
      <p>Whether you have any questions, are interested in starting your own chapter or just want to say hi... Just send us a message!</p>
      <ContactForm/>
    </div> */}
    <div className="contactContent grid-x flex-container" >
      <div className="medium-10 large-10 cell">
      <h1>Feel free to message us!</h1>
      <p>Whether you want to organize your own open Summer of code edition, have suggestions, want to help or just want to say hi... Feel free to message us!</p>
      <a className="button extern" href="https://docs.google.com/forms/d/e/1FAIpQLSfclUjrf-pxhE37RXBvUPoN-A6NDpX-oBcxlkjEk3DgLo1tjA/viewform" target="_blank">Message us</a>
    </div>
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
