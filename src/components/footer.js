import React from "react"
import "../components/foundation.min.css"

const Footer = () => (
  
    <footer>
        <div className=" grid-x grid-padding-x">
      <div class="contributers small-12 large-5 large-offset-1 cell"><p>Powered by <a href="https://www.openknowledge.be/" rel="noopener noreferrer" target="_blank">Open Knowledge Belgium</a>   |   <a href="https://github.com/opensummerofcode/edition-webapp" rel="noopener noreferrer" target="_blank">Source code freely available on GitHub</a> |<a href="https://github.com/opensummerofcode/edition-webapp/blob/master/CONTRIBUTORS.md" rel="noopener noreferrer" target="_blank">Contributors</a></p></div>
      <div className="small-4 medium-5 cell">
        <ul className="inline-list">
          <li><a href="mailto:info@osoc.be">Contact</a></li><li><a href="https://twitter.com/osocode" rel="noopener noreferrer" target="_blank">Twitter</a></li>
          </ul>
          </div>
      </div>
  
    </footer>
)

export default Footer 