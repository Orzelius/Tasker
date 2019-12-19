import React, { Component } from 'react'

 class CreateTask extends Component {
  state= {
    title: '',
    description: ''
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
          <h5 className="grey-text text-darken-4">Create a task</h5>
          <br/>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="description">Description</label>
            <textarea className="materialize-textarea" id="description" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateTask;