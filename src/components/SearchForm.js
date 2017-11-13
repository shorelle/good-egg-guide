import React, { Component } from 'react'
//import { connect } from 'react-redux';

import './SearchForm.css'

class SearchForm extends Component {
  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="search" type="text" placeholder="Search brand..." />
        <button type="submit" className="primary">
          Check
        </button>
      </form>
    )
  }
}

export default SearchForm
