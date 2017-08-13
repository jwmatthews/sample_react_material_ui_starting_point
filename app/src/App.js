import React, { Component } from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import * as reducers from './reducers'

import Main from './Main'
import JssRoot from './components/JssRoot';


const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeWithDevTools(applyMiddleware(middleware)),
)

/**
  We wanted to be able to use the redux store for changing the styling of the app.
  This required we 'connect' the 'JssRoot' component.

  Issues were seen when we placed the 'ConnectedRouter' component was outside of
  JssRoot, route changes ceased to function.  Once we placed the ConnectedRouter
  inside of JssRoot route transitions functioned.

  We needed to share the history variable with the store for the Provider as well
  as with ConnectedRouter, hence we expressed the JSX as below instead of hiding
  ConnectedRouter directly inside of the JssRoot code.

  Alternative:
    pass history as a prop to Main.
    Add ConnectedRouter to Main
    then reuse withRoot as material-ui example showed to wrap with JssProvider

*/
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <JssRoot>
          <ConnectedRouter history={history}>
            <Main />
          </ConnectedRouter>
        </JssRoot>
      </Provider>
    );
  }
}

export default App;
