import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super (props);

        this.state = {
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
         [event.target.name: event.target.value]
        })
    }

    handleSubmit(event) {
        console.log("Handle submit", event);
    }

  render() {
    return (
      <div>
        <h1>LOGIN TO GAIN ENTRY TO THYNE DAHSBOARD</h1>

        <form onSubmit={this.handleSubmit}>
          <input
          type="email"
          name="email"
          placeholder="Enter thy email"
          value={this.state.email}
          onChange={this.handleChange}
          />

          <input
          type="password"
          name="password"
          placeholder="Enter thy passcode"
          value={this.state.password}
          onChange={this.handleChange}
          />

          <div>
              <button type="submit">Attempt entry</button>
          </div>
        </form>
      </div>
    );
  }
}