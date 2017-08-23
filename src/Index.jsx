import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Landing from './views/Landing';
import About from './views/About';

const RouteWrapper = styled.div`
  margin-top: 80px;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <RouteWrapper className="container-fluid">
              <Route exact path="/" component={Landing} message="Hello"></Route>
              <Route path="/about" component={About}></Route>
            </RouteWrapper>
          </div>
        </Router>
      </div>
    )
  }
}

render(
  <App/>,
  document.getElementById('root')
)
