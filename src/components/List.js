import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getListState, requestBrands } from '../redux/modules/list'
import { getActiveLocations } from '../redux/modules/location'
import ListRow from './ListRow'

import './List.css'

class List extends Component {
  componentWillMount() {
    this.props.requestBrands(this.props.locations)
  }

  showRows() {
    console.log(this.props.list.brands)
    return <ListRow />
  }

  showLoader() {
    return <div>Loading...</div>
  }

  render() {
    console.log(this.props.list.brands)
    const content =
      this.props.list.brands.length === 0 ? this.showLoader() : this.showRows()
    return (
      <main className="list">
        <table className="list__table">
          <thead className="list__table__head">
            <tr className="list__table__row">
              <th className="list__table__title">Brand</th>
              <th className="list__table__title">Hens/ha</th>
              <th className="list__table__title">Rating</th>
            </tr>
          </thead>
          <tbody className="list__table__body">{content}</tbody>
        </table>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  list: getListState(state.list),
  locations: getActiveLocations(state.location)
})

const mapDispatchToProps = {
  requestBrands
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
