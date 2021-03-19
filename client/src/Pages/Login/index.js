import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import Input from '../../Components/Input';
import './style.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const { data } = await Axios.post('api/v1/login', {
        email,
        password,
      });
      history.push('/');
      return data;
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="container">
      <h1>Welcome back</h1>
      <form className="signup-container" onSubmit={submitHandler}>
        <Input
          className="input-container email"
          text="Email"
          type="email"
          placeholder="email@expamle.com"
          onChange={emailHandler}
          value={email}
        />

        <Input
          className="input-container Password"
          text="Password"
          type="password"
          placeholder="enter your password"
          onChange={passwordHandler}
          value={password}
        />
        <Input
          className="signup-btn"
          type="submit"
          placeholder=""
          value="Log in"
        />
      </form>
    </div>
  );
};
export default Signup;
