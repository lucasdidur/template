import React from 'react';
import {Redirect, Switch} from 'react-router-dom';

import {RouteWithLayout} from './components';
import {Main as MainLayout, Minimal as MinimalLayout} from './layouts';

import {
    Account as AccountView,
    Dashboard as DashboardView,
    NotFound as NotFoundView,
    SignIn as SignInView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        layout={MainLayout}
        path="/dashboard"
      />
        <RouteWithLayout
            component={AccountView}
            layout={MainLayout}
            path="/account"
        />
      <RouteWithLayout
        component={SignInView}
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
