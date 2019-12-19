import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  handleChange = (e: React.ChangeEvent<{ value: string, id: string }>) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white grey-text" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-4">Sign up </h5>
          <br />
          <div className="row">
            <div className="input-field col m6">
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" onChange={this.handleChange} />
            </div>
            <div className="input-field col m6">
              <label htmlFor="lastName">Last name</label>
              <input type="text" id="lastName" onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
          <div className="input-field col s12">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          </div>
          <div className="row">
            
          <div className="input-field col s12">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
            </div>

          <div className="input-field col s12">
            <button className="btn pink lighten-1">Sign up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp;