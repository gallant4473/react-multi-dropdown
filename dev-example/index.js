import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactMultiDropdown from '../src'

class Example extends Component {
  render () {
    return (
      <div>
        <ReactMultiDropdown />
      </div>
    )
  }
}

export default Example

ReactDOM.render(<Example />, document.getElementById('reactMultiDropdown'))
