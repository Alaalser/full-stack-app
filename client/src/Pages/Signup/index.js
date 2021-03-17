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
      const { data } = await Axios.post('api/v1/signup', {
        userName: user,
        email,
        password,
        confirmPassword,
      });
      console.log(data);
      history.push('/');
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <Input
            text="User Name"
            type="text"
            placeholder="user name"
            onChange={userNameHandler}
            value={user}
          />
        </div>
        <div>
          <Input
            text="Email"
            type="email"
            placeholder="email@expamle.com"
            onChange={emailHandler}
            value={email}
          />
        </div>
        <Input
          text="Password"
          type="password"
          placeholder="enter your password"
          onChange={passwordHandler}
          value={password}
        />
        <div>
          <Input
            text="confirm Password"
            type="password"
            placeholder="password again"
            onChange={confirmPasswordHandler}
            value={confirmPassword}
          />
        </div>
        <Input type="submit" placeholder="" />
      </form>
    </>
  );
};
export default Signup;
