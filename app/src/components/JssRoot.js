// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { JssProvider } from 'react-jss';
import { connect } from 'react-redux'

import { withStyles, MuiThemeProvider } from 'material-ui/styles';
import createContext from '../styles/createContext';


// Adding a connection to the redux store so we may change look/feel based on state
//
// Actions
//
const changeThemeType = (themeType) => {
  console.log(`changeThemeType(${themeType})`);
  return {
    type: 'CHANGE_THEME_TYPE',
    themeType: themeType,
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    themeType: state.theme.themeType,
  }
}

const mapDispatchToProps = dispatch => {
  console.log("mapDispatchToProps invoked")
  return {
    changeThemeType:  () => dispatch(changeThemeType()),
  }
}


// Apply some reset
const styleSheet = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    body: {
      margin: 0,
      height: "100%",
    },
  },
});

let AppWrapper = props => props.children;

AppWrapper = withStyles(styleSheet)(AppWrapper);


class JssRoot extends Component {

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  getChildContext() {
     return {themeContext: this.themeContext};
   }

  render() {
    this.themeContext = createContext(this.props.themeType)
    return (
      <JssProvider registry={this.themeContext.sheetsRegistry} jss={this.themeContext.jss}>
        <MuiThemeProvider theme={this.themeContext.theme} sheetsManager={this.themeContext.sheetsManager}>
          <AppWrapper>
            { this.props.children }
          </AppWrapper>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

JssRoot.propTypes = {
  themeType: PropTypes.string.isRequired,
};
JssRoot.defaultProps = {
  themeType: 'light',
};
JssRoot.childContextTypes = {
  themeContext: PropTypes.object
};

const JssRootAndStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(JssRoot)

export default JssRootAndStore;
