import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const DetailCard = ({ title, text }) => (
 
  <div className="detail-card">
      <h3>{title}</h3>
      <p>{text}</p>
  </div>
)

DetailCard.propTypes = {
  titleitle: PropTypes.string,
  text: PropTypes.string
}

DetailCard.defaultProps = {
  siteTitle: ``,
}

export default DetailCard
