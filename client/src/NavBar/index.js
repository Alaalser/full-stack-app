import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import './style.css';

const NavBar = () => (
  <div className="Nav">
    <ul>
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
    </ul>
  </div>
);

export default NavBar;
