import React, { Component } from 'react'

import './Button.css'

class Button extends Component {
  isActive() {
    return this.props.active ? ' active' : ' inactive';
  }

  render() {
    return (
      <button 
        type="button" 
        value={this.props.value} 
        className={'location ' + this.props.value + this.isActive()} 
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button