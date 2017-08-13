import React from 'react';
import { Route } from 'react-router'


import withRoot from './components/withRoot';

import Header from './Header'
import Footer from './Footer'

const DefaultLayout = ({component: Component, ...rest}) => {
  let WrappedComponent = withRoot(Component)

  return (
    <Route {...rest} render={matchProps => (
      <div className="DefaultLayout">
        <Header />
        <WrappedComponent {...matchProps} />
        <Footer />
      </div>
    )} />
  )
};

export default DefaultLayout;
