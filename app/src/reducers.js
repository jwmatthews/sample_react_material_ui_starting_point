const initialState = {
  isOpen: false,
}

const secret =  (state = initialState, action) => {
  console.log(`reducer:  state:${JSON.stringify(state)}, action=${JSON.stringify(action)}`)
  switch (action.type) {
  case 'OPEN':
    return {isOpen: true}
  case 'CLOSE':
    return {isOpen: false}
  default:
    return state
  }
}


export { secret };
