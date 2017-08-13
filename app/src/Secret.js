import { connect } from 'react-redux'
import SecretView from './SecretView'

const handleOpen = () => {
  console.log("handleOpen");
  return {
    type: 'OPEN',
  }
}

const handleClose = () => {
  console.log("handleClose");
  return {
    type: 'CLOSE',
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(`Secret::mapStateToProps invoked, \n\tstate="${JSON.stringify(state)}", \n\townProps="${JSON.stringify(ownProps)}"`)
  return {
    isOpen: state.secret.isOpen,
  }
}

const mapDispatchToProps = dispatch => {
  console.log("mapDispatchToProps invoked")
  return {
    handleOpen:  () => dispatch(handleOpen()),
    handleClose: () => dispatch(handleClose()),
  }
}

const Secret = connect(
  mapStateToProps,
  mapDispatchToProps
)(SecretView)

export default Secret;
