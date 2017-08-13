# Notes

## Installing material-ui

1. npm install -S material-ui@next react-tap-event-plugin material-ui-icons
1. Modify index.html and add
```html
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
```

## Material Icon Font
 * https://material.io/icons/

## Material Component Demos
 * https://material-ui-1dab0.firebaseapp.com/component-demos

## Installing redux
1. ```npm install --save redux react-redux```
1. ```npm install --save-dev redux-devtools```

## Adding react-router-redux
1. ```npm install --save react-router-redux@next react-router-dom history```
1. Follow instructions at https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux

## Adding redux devtools extension
1. ```npm install --save redux-devtools-extension```
1. Edit source code

```js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

```
## Redux Form
  * https://github.com/erikras/redux-form
  * http://redux-form.com/7.0.3/


## Blog Posts
  * [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
  * [React Redux Explained](http://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/)
  * [Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/)
  * [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
  * [Reusing layouts in React Router 4](https://simonsmith.io/reusing-layouts-in-react-router-4/)
  * Redux
      * [A simplified approach to calling APIs with redux](http://www.sohamkamani.com/blog/2016/06/05/redux-apis/)
  * Router Information
      * [History](https://medium.com/@pshrmn/a-little-bit-of-history-f245306f48dd)
      * [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
      * [React Workshop](https://github.com/ReactTraining/react-workshop)
  * Material UI
      * [Material UI Docs](https://material-ui-1dab0.firebaseapp.com/component-demos/app-bar)
      * [Left Nav in Material UI](https://medium.com/@sanfordb/using-material-ui-s-app-bar-with-left-nav-in-react-d9311a49b3d0)
      * [Login Form](http://redux-form.com/6.0.0-rc.1/examples/material-ui/)
