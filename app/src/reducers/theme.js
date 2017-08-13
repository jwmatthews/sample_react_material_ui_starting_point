const themeInitialState = {
  themeType: "light"
}

const theme =  (state = themeInitialState, action) => {
  switch (action.type) {
  case 'CHANGE_THEME_TYPE':
    return {themeType: action.themeType}
  default:
    return state
  }
}

export default theme;
