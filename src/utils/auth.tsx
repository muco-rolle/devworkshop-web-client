import React from "react";

import { storage } from "utils";
import jwt_decode from "jwt-decode";
import { Redirect } from "react-router-dom";
import { routes } from "config";

export const isTokenExpired = () => {
    const { token } = storage.get("devworkshop");

    if (token) {
        const decodedInfo: any = jwt_decode(token);
        const currentTime = Date.now() / 1000;

        return decodedInfo.exp && decodedInfo.exp < currentTime ? true : false;
    } else {
        return false;
    }
};

export const isUserAuthenticated = () => {
    const { token } = storage.get("devworkshop");

    const authStatus = {
        newUser: false,
        expiredUser: false,
        authenticatedUser: false,
    };

    if (token) {
        if (isTokenExpired()) {
            return { ...authStatus, expiredUser: true };
        } else {
            authStatus.authenticatedUser = true;
            return { ...authStatus, authenticatedUser: true };
        }
    } else {
        return { ...authStatus, newUser: true };
    }
};

export const authController = () => {
    const { authenticatedUser, expiredUser } = isUserAuthenticated();
    if (authenticatedUser) {
        return <Redirect to={routes.app} />;
    } else if (expiredUser) {
        return <Redirect to={routes.login} />;
    }
};
