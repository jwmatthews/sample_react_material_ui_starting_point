import React from 'react';
import { Route } from 'react-router'


import withRoot from './components/withRoot';
import Grid from 'material-ui/Grid';

import Header from './Header'
import Footer from './Footer'

const DefaultLayout = ({component: Component, ...rest}) => {
  let WrappedComponent = withRoot(Component)

  return (
    <Route {...rest} render={matchProps => (
      <div className="DefaultLayout">
        <Header />
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <WrappedComponent {...matchProps} />
          </Grid>
        </Grid>
        <Footer />
      </div>
    )} />
  )
};

export default DefaultLayout;
