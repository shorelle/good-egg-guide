import React, { Component } from 'react'
import Egg from './Egg'
import SearchForm from './SearchForm'

import './Header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header__content">
          <h1>
            Free Range<span className="divider"> </span>Egg Guide
          </h1>
          <p className="header__subtitle">
            Check which free range egg brands meet the Model Code. Based on
            research by{' '}
            <a
              href="https://www.choice.com.au/food-and-drink/meat-fish-and-eggs/eggs/articles/what-free-range-eggs-meet-the-model-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              Choice
            </a>
          </p>
        </div>
        <Egg />
        <SearchForm />
      </header>
    )
  }
}

export default Header
