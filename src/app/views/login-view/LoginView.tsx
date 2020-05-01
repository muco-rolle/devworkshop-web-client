import React from "react";
import { DocumentHead } from "app/components";
import { LoginForm } from "./components";
import { AuthLayout } from "app/layouts";
import { Redirect } from "react-router-dom";
import { routes } from "config";
import { isUserAuthenticated } from "utils";

export const LoginView = () => {
    const { authenticatedUser, expiredUser } = isUserAuthenticated();
    if (authenticatedUser) {
        return <Redirect to={routes.app} />;
    } else if (expiredUser) {
        return <Redirect to={routes.login} />;
    }

    return (
        <>
            <DocumentHead title="Login" />
            <AuthLayout>
                <LoginForm />
            </AuthLayout>
        </>
    );
};
