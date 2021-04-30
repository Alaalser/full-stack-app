import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuth } from './AuthContext';

const PrivateRoutes = ({ children, ...otherProps }) => {
  const [isAuth] = useAuth();

  if (isAuth) {
    return <Route {...otherProps}>{children}</Route>;
  }
  if (isAuth === false) {
    return <Redirect to="/" />;
  }
  return (
    <div className="loading">
      <h3>loading</h3>
    </div>
  );
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
