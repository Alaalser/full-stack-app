import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import Input from '../../Components/Input';
import './style.css';

import AuthContext from '../../Context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState();
  const [isOk, setIsOk] = useState(false);

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
      await Axios.post('api/v1/login', {
        email,
        password,
      });
      setIsOk(true);
      history.push('/');
    } catch (error) {
      let msg;
      if (error.response.data.message) {
        msg = error.response.data.message;
      }
      setErrorMsg(msg);
    }
  };

  return (
    <AuthContext.Consumer>
      {({ checkAuth }) => {
        if (isOk) {
          checkAuth();
        }
        return (
          <div className="container-form">
            <h1>Welcome back</h1>
            {errorMsg && <p> {errorMsg} </p>}
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
      }}
    </AuthContext.Consumer>
  );
};
export default Signup;
