import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import Input from '../../Components/Input';
import './style.css';

const Signup = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState();
  const history = useHistory();

  const userNameHandler = (event) => {
    setUser(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setErrorMsg();

      await Axios.post('api/v1/signup', {
        userName: user.trim(),
        email: email.trim(),
        password,
        confirmPassword,
      });
      history.push('/');
    } catch (error) {
      let msg;
      if (error.response.data.message) {
        msg = error.response.data.message;
      }
      setErrorMsg(msg[0]);
    }
  };

  return (
    <div className="container-form">
      <h1>Sign up</h1>
      {errorMsg && <p> {errorMsg} </p>}
      <form className="signup-container" onSubmit={submitHandler}>
        <Input
          className="input-container user-name"
          text="User Name"
          type="text"
          placeholder="user name"
          onChange={userNameHandler}
          value={user}
          required
        />

        <Input
          className="input-container email"
          text="Email"
          type="email"
          placeholder="email@expamle.com"
          onChange={emailHandler}
          value={email}
          required
        />

        <Input
          className="input-container Password"
          text="Password"
          type="password"
          placeholder="enter your password"
          onChange={passwordHandler}
          value={password}
          required
        />

        <Input
          className="input-container Password"
          text="confirm Password"
          type="password"
          placeholder="password again"
          onChange={confirmPasswordHandler}
          value={confirmPassword}
          required
        />

        <Input
          className="signup-btn"
          type="submit"
          placeholder=""
          value="Sign up"
        />
      </form>
    </div>
  );
};
export default Signup;
