import React from 'react';
import AuthContext from '../../context/auth-context';

import classes from './Navigation.module.css';


const Navigation = (props) => {
  const ctxData = React.useContext(AuthContext) //שומר את האובייקט בו קיים כל המידע של הקונטקסט

  return (
        <nav className={classes.nav}>
          <ul>
            {ctxData.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {ctxData.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {ctxData.isLoggedIn && (
              <li>
                <button onClick={ctxData.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
  );
};

export default Navigation;
