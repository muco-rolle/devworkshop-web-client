import React from "react";
import { DocumentHead } from "app/components";
import { AuthLayout } from "app/layouts";
import { SignupForm } from "./components";
import { isUserAuthenticated } from "utils";
import { Redirect } from "react-router-dom";
import { routes } from "config";

export const SignupView = () => {
    const { authenticatedUser, expiredUser } = isUserAuthenticated();
    if (authenticatedUser) {
        return <Redirect to={routes.app} />;
    } else if (expiredUser) {
        return <Redirect to={routes.login} />;
    }
    return (
        <>
            <DocumentHead title="Signup" />
            <AuthLayout>
                <SignupForm />
            </AuthLayout>
        </>
    );
};
