import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
  textField: {
    marginLeft: 15,
    marginRight: 15,
    width: 200,
  }
};

const Login = () => {
  return (
    <div className="Login" style={styles.container} >
      <Typography type="display1" gutterBottom>
        Please Login
      </Typography>
      <TextField
         label="Email Address"
         placeholder="joe@example.com"
         className={styles.textField}
       />
      <br />
       <TextField
            id="password"
            label="Password"
            className={styles.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
      <br />
      <Button raised color="primary">
       Login
     </Button>
    </div>
  );
}

export default Login;
