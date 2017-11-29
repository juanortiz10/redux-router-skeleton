import React, { Component } from 'react'
import { Route, Router } from 'react-router'
import PropTypes from 'prop-types'
import './App.css'

import Home from './views/Home'

class App extends Component {
  render() {
    return (
      <Router history={ this.props.history }>
        <div>
          <Route exact path="/" component={ Home }/>
          {/* Here you can put more routes on */}
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  history: PropTypes.any
};

export default App;
