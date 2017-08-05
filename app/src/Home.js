import React from 'react';
import Typography from 'material-ui/Typography';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const Home = ({}) => {
  return (
    <div className="Home" style={styles.container} >
      <Typography type="display1" gutterBottom>
        Welcome!
      </Typography>
    </div>
  );
}

export default Home;
