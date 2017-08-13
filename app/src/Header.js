import React from 'react';

import NavigationBar from './NavigationBar'

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 0,
  },
};

const Header = () => {
  return (
    <div className="Header" style={styles.container} >
      <NavigationBar />
    </div>
  );
}

export default Header;
