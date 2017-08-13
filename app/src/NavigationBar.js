// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

import Paper from 'material-ui/Paper';


import DashboardIcon from 'material-ui-icons/Dashboard';
import HomeIcon from 'material-ui-icons/Home';
import ListIcon from 'material-ui-icons/List';
import LockIcon from 'material-ui-icons/Lock';
import PetsIcon from 'material-ui-icons/Pets';
import SettingIcon from 'material-ui-icons/Settings';

import AccountMenu from './AccountMenu';

const styleSheet = createStyleSheet(theme => ({
  root: {
    marginTop: 0,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  sidelist: {
    width: 250,
    flex: 'initial',
  },
  group: {
   margin: `${theme.spacing.unit}px 0`,
 },
}));

class NavigationBar extends Component {
  constructor(props, context) {
    super(props);
    this.state = {isSideBarOpen: false};
    this.store = context.store;
    this.openSideBar = this.openSideBar.bind(this);
    this.closeSideBar = this.closeSideBar.bind(this);
    this.toggleSideBar = this.toggleSideBar.bind(this);
    this.toggleMenuSideBar = this.toggleMenuSideBar.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }
  toggleMenuSideBar() {
    this.setState(prevState => ({
      isSideBarOpen: !prevState.isSideBarOpen
    }));
  }
  toggleSideBar() {
    this.setState(prevState => ({
      isSideBarOpen: !prevState.isSideBarOpen
    }));
  }
  openSideBar() {
    this.setState(prevState => ({
      isSideBarOpen: true
    }));
  }
  closeSideBar() {
    this.setState(prevState => ({
      isSideBarOpen: false
    }));
  }
  changeTheme(themeType) {
    var action = {
      type: 'CHANGE_THEME_TYPE',
      themeType: themeType,
    }
    this.store.dispatch(action);
  }


  render() {
    const themeType = this.context.themeContext.themeType
    const nextThemeType = themeType == "light" ? "dark" : "light"

    const classes = this.props.classes;
    const sideBarList = (
      <div>
        <List className={classes.sidelist} disablePadding>
          <div>
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home"/>
              </ListItem>
            </Link>
            <Link to="/data">
              <ListItem button>
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText primary="Data" />
              </ListItem>
            </Link>
            <Link to="/sample">
              <ListItem button>
                <ListItemIcon>
                  <PetsIcon />
                </ListItemIcon>
                <ListItemText primary="Sample"/>
              </ListItem>
            </Link>
            <Link to="/secret">
              <ListItem button>
                <ListItemIcon>
                  <LockIcon />
                </ListItemIcon>
                <ListItemText primary="Secret" />
              </ListItem>
            </Link>
          </div>
        </List>
        <Divider />
        <List className={classes.sideList} disablePadding>
          <div>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Other" />
            </ListItem>
          </div>
        </List>
        <List className={classes.sideList} disablePadding>
          <div>
            <ListItem button>
              <ListItemIcon>
                <SettingIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </div>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu" onClick={this.toggleMenuSideBar}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
            </Typography>

            <div>
              <Button onClick={ () => this.changeTheme(nextThemeType)}>
                Change to { nextThemeType} theme
              </Button>
            </div>
            <Link color="contrast" to="/login">
              Login
            </Link>
            <AccountMenu />
          </Toolbar>
        </AppBar>
        <div>
          <Drawer
            open={this.state.isSideBarOpen}
            onRequestClose={this.closeSideBar}
            onClick={this.closeSideBar}
            docked={false}
          >
            {sideBarList}
          </Drawer>
        </div>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
NavigationBar.contextTypes = {
  store: PropTypes.object,
  themeContext: PropTypes.object
};

export default withStyles(styleSheet)(NavigationBar);
