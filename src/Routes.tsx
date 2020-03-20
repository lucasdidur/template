import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
    Account as AccountView,
    Dashboard as DashboardView,
    NotFound as NotFoundView,
    SignIn as SignInView,
    UserList as UserListView,
} from './views';
import { AuthProvider } from "./Auth";

const Routes = () => {
    return (
        <AuthProvider>
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
                    component={UserListView}
                    layout={MainLayout}
                    path="/users"
                />
                <RouteWithLayout
                    component={SignInView}
                    layout={MinimalLayout}
                    path="/sign-in"
                    public={true}
                />
                <RouteWithLayout
                    component={NotFoundView}
                    layout={MinimalLayout}
                    path="/not-found"
                    public={true}
                />
                <Redirect to="/not-found"/>
            </Switch>
        </AuthProvider>
    );
};

export default Routes;
