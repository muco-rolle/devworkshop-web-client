import React from "react";
import { Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { getRoutes } from "app/routing";
import { history } from "utils";
import { GlobalStyles } from "app/components";
import { theme } from "theme";

// rsuite styles
import "rsuite/lib/styles/index.less";

// inter font
import "typeface-inter";

export const App = () => {
    const routes = getRoutes();

    return (
        <ThemeProvider theme={theme}>
            <Router history={history}>
                <GlobalStyles />
                <Switch>{routes}</Switch>
            </Router>
        </ThemeProvider>
    );
};
