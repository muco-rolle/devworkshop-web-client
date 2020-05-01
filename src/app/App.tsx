import React from "react";
import { Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ReactNotification from "react-notifications-component";
import { ApolloProvider } from "@apollo/react-hooks";

import { getRoutes } from "app/routing";
import { history } from "utils";
import { GlobalStyles } from "app/components";
import { theme } from "theme";

// rsuite styles
import "rsuite/lib/styles/index.less";

// react notification styles
import "react-notifications-component/dist/theme.css";

// inter font
import "typeface-inter";
import { client } from "config";

export const App = () => {
    const appRoutes = getRoutes();

    return (
        <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
                <Router history={history}>
                    <GlobalStyles />
                    <ReactNotification />
                    <Switch>{appRoutes}</Switch>
                </Router>
            </ApolloProvider>
        </ThemeProvider>
    );
};
