import React, { Fragment } from "react";
import { Router, Switch } from "react-router-dom";

import { getRoutes } from "routing";
import { history } from "utils";

export const App = () => {
    const routes = getRoutes();

    return (
        <Fragment>
            <Router history={history}>
                <Switch>{routes}</Switch>
            </Router>
        </Fragment>
    );
};
