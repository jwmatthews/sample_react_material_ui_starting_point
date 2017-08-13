import React from 'react';
import Typography from 'material-ui/Typography';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const Login = () => {
  return (
    <div className="Login" style={styles.container} >
      <Typography type="display1" gutterBottom>
        Login Page!
      </Typography>
    </div>
  );
}

export default Login;
