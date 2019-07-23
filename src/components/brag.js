import React from "react"
import "../components/foundation.min.css"

const Brag = ({start_text, num, end_text, col}) => (
  <div className="small-6 medium-4 large-auto ">
      <div className="small-12 medium-12 cell">{start_text}</div>
      <div className="small-12 medium-12 cell color-number" style={{color: col}}>{num}</div>
      <div className="small-12 medium-12 cell">{end_text}</div>
  </div>
)

export default Brag 