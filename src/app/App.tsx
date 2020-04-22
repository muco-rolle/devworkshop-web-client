import React, { Fragment } from "react";
import { Router, Switch } from "react-router-dom";

import { getRoutes } from "routing";
import { history } from "utils";
import { GlobalStyles } from "components";

// rsuite styles
import "rsuite/lib/styles/index.less";

// inter font
import "typeface-inter";

export const App = () => {
    const routes = getRoutes();

    return (
        <Fragment>
            <Router history={history}>
                <GlobalStyles />
                <Switch>{routes}</Switch>
            </Router>
        </Fragment>
    );
};
