import React, { Component } from 'react';
import { Route } from 'react-router'

import injectTapEventPlugin from "react-tap-event-plugin"

import Footer from './Footer'
import Header from './Header'

import ColorList from './ColorList'
import Home from './Home'
import Login from './Login'
import SamplePaper from './SamplePaper'
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
        <Route exact path="/color" component={ColorList} />
        <Route exact path="/sample" component={SampleWidgets} />
        <Route exact path="/secret" component={Secret} />
        <Route exact path="/paper" component={SamplePaper} />

        <Footer />
      </div>
    );
  }
}

export default Main;
