import React, { Component } from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import injectTapEventPlugin from "react-tap-event-plugin"

import withRoot from './components/withRoot';
import * as reducers from './reducers'

import Home from './Home'
import Secret from './Secret'

injectTapEventPlugin();

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/secret" component={Secret}/>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default withRoot(App);
