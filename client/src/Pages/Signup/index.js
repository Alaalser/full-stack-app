import React from 'react';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import './style.css';

const Signup = () => (
  <form className="form">
    <Input type="text" id="name" placeholder="user name" />
    <Input type="email" id="email" placeholder="email@expamle.com" />
    <Input type="password" id="password" placeholder="enter your password" />
    <Input
      type="password"
      id="confirmedPassword"
      placeholder="password again"
    />
    <Button text="Sign up" />
  </form>
);

export default Signup;
