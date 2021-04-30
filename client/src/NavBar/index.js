import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import Button from '../Components/Button';
import './style.css';

import { useAuth } from '../Routes/AuthContext';

const NavBar = () => {
  const [IsAuth, setIsAuth] = useAuth();

  const history = useHistory();

  const logoutFunction = async () => {
    await axios.get('/api/v1/logout');
    setIsAuth(false);
    history.push('/');
  };

  return (
    <div>
      <div className="Nav-right">
        {!IsAuth ? (
          <Link
            to={{
              pathname: '/signup',
            }}
          >
            <Button text="sign up" />
          </Link>
        ) : (
          <Link
            to={{
              pathname: '/:userId',
            }}
          >
            <Button text="My Data" />
          </Link>
        )}
        {!IsAuth ? (
          <Link
            to={{
              pathname: '/login',
            }}
          >
            <Button text="log in" />
          </Link>
        ) : (
          <Button onClick={logoutFunction} value={IsAuth} text="log out" />
        )}
      </div>
      <div className="Nav-left">
        <Link
          to={{
            pathname: '/',
          }}
        >
          <Button text="Home" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
