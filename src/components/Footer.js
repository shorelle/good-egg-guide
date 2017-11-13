import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLocationState, setLocation } from '../redux/modules/location'
import Button from './Button'

import './Footer.css'

class Footer extends Component {
  render() {
    const { locations, setLocation } = this.props

    return (
      <footer>
        <h3 className="footer__title">I'm looking for eggs available in:</h3>
        {Object.keys(locations).map((key, index) => (
          <Button
            key={index}
            value={key}
            label={locations[key].label}
            onClick={() => setLocation(key)}
            active={locations[key].active}
          />
        ))}
      </footer>
    )
  }
}

const mapStateToProps = state => ({
  locations: getLocationState(state.location)
})

const mapDispatchToProps = {
  setLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
