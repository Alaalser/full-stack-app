import React from 'react';
import Input from '../../Components/Input';
import './style.css';

const Signup = () => (
  <form className="form">
    <div>
      <Input
        text="User"
        type="text"
        label="User Name"
        id="name"
        placeholder="user name"
      />
    </div>
    <div>
      <Input
        text="Email"
        type="email"
        id="email"
        placeholder="email@expamle.com"
      />
    </div>
    <Input
      text="Password"
      type="password"
      id="password"
      placeholder="enter your password"
    />{' '}
    <div>
      <Input
        text="confirmed Password"
        type="password"
        id="confirmedPassword"
        placeholder="password again"
      />
    </div>
    <Input type="submit" value="submit" />
  </form>
);

export default Signup;
