import React from "react";
import { isUserAuthenticated } from "utils";
import { Redirect } from "react-router-dom";
import { routes } from "config";

interface AuthRoutesProps {
    children: React.ReactChild;
}

export const AuthRoutes: any = (props: AuthRoutesProps) => {
    const authStatus = isUserAuthenticated();

    return authStatus.authenticatedUser ? (
        props.children
    ) : (
        <Redirect to={routes.login} />
    );
};
