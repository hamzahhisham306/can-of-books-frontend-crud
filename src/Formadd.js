import React, { Component } from 'react'

 class Formupdate extends Component {
  render() {
    return (
      <form onSubmit={this.props.createBook}>
        <br/>
        <label htmlFor=''>Book Name</label>
        <input type='test'id='bookName'/>
        <br/><br/>
        <label htmlFor=''>Book description</label>
        <input type="text" name='' id="descrption"/>
        <br/><br/>
        <button type='submit'>Save</button>
      </form>
    )
  }
}

export default Formupdate
