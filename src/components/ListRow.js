import React, { Component } from 'react'

import './ListRow.css'

class ListRow extends Component {
  render() {
    return (
      <tr className="list__table__row">
        <td className="list__table__cell">Example Farm</td>
        <td className="list__table__cell">1500</td>
        <td className="list__table__cell">Yes</td>
      </tr>
    )
  }
}

export default ListRow
