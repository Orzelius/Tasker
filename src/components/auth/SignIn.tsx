import React, { Component } from 'react'

 class SignIn extends Component {
  state= {
    email: '',
    password: ''
  }
  handleChange = (e: React.ChangeEvent<{value: string, id: string}>) =>{
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-4">Sign in</h5>
          <br/>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;