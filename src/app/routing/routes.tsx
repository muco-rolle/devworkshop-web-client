import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { routes } from "config";
import {
    HomeView,
    SignupView,
    LoginView,
    ActivateAccountView,
    AppView,
} from "app/views";

export const getRoutes = () => (
    <Fragment>
        <Route exact path={routes.home} component={HomeView} />
        <Route path={routes.signup} component={SignupView} />
        <Route path={routes.login} component={LoginView} />
        <Route path={routes.activateAccount} component={ActivateAccountView} />
        <Route path={routes.app} component={AppView} />
    </Fragment>
);
