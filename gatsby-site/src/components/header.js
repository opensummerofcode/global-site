import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo-osoc-color.svg"
const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <div
      style={{
        display: 'flex',
        flex: 1,
        margin: `0`
        
      }}
    >
        <Link
          to="/"
          className="logo"
        >
          <img src={Logo} alt="open summer of code logo, very abstract, fun but professional" / > 
        </Link>


      <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `BLACK` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
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
