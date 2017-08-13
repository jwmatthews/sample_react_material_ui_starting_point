import React, { Component } from 'react';
import { Route } from 'react-router'

import injectTapEventPlugin from "react-tap-event-plugin"

import Footer from './Footer'
import Header from './Header'

import Home from './Home'
import Login from './Login'
import SampleWidgets from './SampleWidgets'
import Secret from './Secret'

injectTapEventPlugin();

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sample" component={SampleWidgets} />
        <Route exact path="/secret" component={Secret} />
        <Footer />
      </div>
    );
  }
}

export default Main;
