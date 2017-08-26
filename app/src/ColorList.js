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
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  //root: theme.mixins.gutters({
  //  paddingTop: 16,
  //  paddingBottom: 16,
  //}),
}));

const ColorList = (props) => {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={4}>
             <Typography type="headline" component="h3">
               This is a sheet of paper.
             </Typography>
             <Typography type="body1" component="p">
               Paper can be used to build surface or other elements for your application.
             </Typography>
           </Paper>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </div>
  );
}

ColorList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ColorList);
