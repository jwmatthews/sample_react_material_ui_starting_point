import React from 'react';
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const SecretView = ({ foo, isOpen, handleOpen, handleClose }) => {
  console.log(`SecretView::render() isOpen=${JSON.stringify(isOpen)}`);
  return (
    <div className="SecretView" style={styles.container} >
      <h4>{foo}</h4>
      <Dialog open={isOpen} onRequestClose={handleClose}>
        <DialogTitle>Super Secret Password</DialogTitle>
        <DialogContent>
          <DialogContentText>1-2-3-4-5</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Typography type="display1" gutterBottom>
        Material-UI
      </Typography>
      <Typography type="subheading" gutterBottom>
        example project
      </Typography>
      <Button raised color="accent" onClick={handleOpen}>
        Super Secret Password
      </Button>
    </div>
  );
}

export default SecretView;
