import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import {red, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green,
  lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey,
  blueGrey } from 'material-ui/colors';
import Paper from 'material-ui/Paper'
import SimpleMenu from './SimpleMenu'
import UndockedDrawer from './UndockedDrawer'

const styleSheet = createStyleSheet(theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
}));

const ColorList = (props) => {
  const classes = props.classes;
  return (
    <div className="ColorList" className={classes.container} >
      <Paper className={classes.root} elevation={4}>
         <Typography type="headline" component="h3">
           This is a sheet of paper.
         </Typography>
         <Typography type="body1" component="p">
           Paper can be used to build surface or other elements for your application.
         </Typography>
       </Paper>
    </div>
  );
}

ColorList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ColorList);
