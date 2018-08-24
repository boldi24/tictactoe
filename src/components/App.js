import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import PrivateRoute from '../containers/PrivateRoute';

const App = () => (
  <div className="container-fluid">
    <Switch>
      <Redirect from="/" to="/home" exact />
      {/* eslint-disable-next-line react/no-array-index-key */}
      {publicRoutes.map((r, i) => <Route key={i} {...r} />)}
      {/* eslint-disable-next-line react/no-array-index-key */}
      {privateRoutes.map((r, i) => <PrivateRoute key={i} {...r} />)}
    </Switch>
  </div>
);

export default App;
