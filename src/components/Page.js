import React, { Component } from 'react'
import Header from './Header'
import List from './List'
import Footer from './Footer'

import './Page.css'

class Page extends Component {
  render() {
    return (
      <div className="Page">
        <Header />
        <List />
        <Footer />
      </div>
    );
  }
}

export default Page