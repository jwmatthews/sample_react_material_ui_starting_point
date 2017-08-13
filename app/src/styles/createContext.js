// @flow

import { create } from 'jss';
import preset from 'jss-preset-default';
import { SheetsRegistry } from 'react-jss';
import createPalette from 'material-ui/styles/palette';
import createMuiTheme from 'material-ui/styles/theme';
//import { purple, green, blue, orange, indigo, blueGrey } from 'material-ui/colors';
import { orange, blueGrey } from 'material-ui/colors';

import createGenerateClassName from 'material-ui/styles/createGenerateClassName';


function theme(themeType) {
  return createMuiTheme({
   palette: createPalette({
     primary: blueGrey,
     accent: orange,
     type: themeType,
   })
  });
}

// Configure JSS
const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;

export default function createContext(themeType='light') {
  return {
    themeType: themeType,
    jss,
    theme: theme(themeType),
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new WeakMap(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
  };
}
