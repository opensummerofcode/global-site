import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo-osoc-color.svg"
const Header = ({ siteTitle, menuLinks }) => (
  <header style={{display: "flex",  justifyContent: "space-between"}}>
    <div >
        <Link
          to="/"
          className="logo"
        >
          <img src={Logo} alt="open summer of code logo, very abstract, fun but professional" / > 
        </Link>
</div>

    <div className="flex-container">
          <nav>
            <ul>
              <li><a target="_blank" href="https://osoc.be">oSoc Belgium</a></li>
              <li><a target="_blank" href="https://summerofcode.es/">oSoc Spain</a></li>
              <li><a className="button" target="_blank" href="https://summerofcode.es/">Create your own edition</a></li>
                    </ul>
          </nav>
        </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
