import React from 'react';
import Typography from 'material-ui/Typography';

import SimpleMenu from './SimpleMenu'
import UndockedDrawer from './UndockedDrawer'

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 0,
  },
};

const SampleWidgets = () => {
  return (
    <div className="SampleWidgets" style={styles.container} >
      <SimpleMenu />
      <UndockedDrawer />
      <Typography type="display1" gutterBottom>
        Welcome!
      </Typography>
    </div>
  );
}

export default SampleWidgets;
