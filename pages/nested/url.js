import React from 'react'
import isUnique from '../../src/is-unique-view'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { unique: false }
  }

  componentDidMount() {
    this.setState({ unique: isUnique() })
  }

  render() {
    return (
      <div>
        <h1>/nested/url</h1>

        <p>
          <a href="/">home</a>
        </p>

        <p>
          {this.state.unique ? 'unique view' : 'not unique view'}
        </p>
      </div>
    )
  }
}
