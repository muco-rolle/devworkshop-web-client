import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "config";
import {
    HomeView,
    SignupView,
    LoginView,
    ActivateAccountView,
    AppView,
} from "app/views";
import { AuthRoutes } from "./auth-routes";

export const getRoutes = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path={routes.home} component={HomeView} />
                <Route path={routes.signup} component={SignupView} />
                <Route path={routes.login} component={LoginView} />
                <Route
                    path={routes.activateAccount}
                    component={ActivateAccountView}
                />

                <AuthRoutes>
                    <Route path={routes.app} component={AppView} />
                </AuthRoutes>
            </Switch>
        </Fragment>
    );
};
