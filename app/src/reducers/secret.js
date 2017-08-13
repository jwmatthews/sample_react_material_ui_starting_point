const secretInitialState = {
  isOpen: false,
}

const secret =  (state = secretInitialState, action) => {
  switch (action.type) {
  case 'OPEN':
    return {isOpen: true}
  case 'CLOSE':
    return {isOpen: false}
  default:
    return state
  }
}

export default secret;
