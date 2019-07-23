import React from "react"

/** Credit to https://www.gatsbyjs.org/docs/adding-forms/  */
export default class ContactForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <div className="form-group">
         <label className="form-check-label">
           Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            className="form-control"
          />
        </label>
        </div>
        <div className="form-group"> <label className="form-check-label">
          E-mail
          <input
            type="email"
            name="lastName"
            value={this.state.email}
            onChange={this.handleInputChange}
            className="form-control"
          />
        </label >
        </div>
        <div className="form-group">
          <label className="form-check-label">
          Message
          <textarea
            
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
            className="form-control"
            rows="3"
          />
        </label>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    )
  }
}