import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { routes } from "config";
import { HomeView, SignupView, LoginView, ActivateAccountView } from "views";

export const getRoutes = () => (
    <Fragment>
        <Route path={routes.home} component={HomeView} />
        <Route path={routes.signup} component={SignupView} />
        <Route path={routes.activateAccount} component={ActivateAccountView} />
        <Route path={routes.login} component={LoginView} />
    </Fragment>
);
