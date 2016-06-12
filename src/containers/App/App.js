import React, { PropTypes } from 'react'
import { Router } from 'react-router'

class App extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <h1>Hello World JA</h1>
        <Router
          routes={this.props.routes}
          history={this.props.history}
          />
      </div>
    )
  }
}

export default App;
