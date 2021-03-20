import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import './style.css';

const NavBar = () => (
  <div>
    <div className="Nav-right">
      <Link
        to={{
          pathname: '/signup',
        }}
      >
        <Button text="sign up" />
      </Link>
      <Link
        to={{
          pathname: '/login',
        }}
      >
        <Button text="log in" />
      </Link>
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

export default NavBar;
