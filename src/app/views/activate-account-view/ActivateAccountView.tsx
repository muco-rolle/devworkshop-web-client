import React from "react";
import { DocumentHead } from "app/components";
import { AuthLayout } from "app/layouts";
import { ActivateAccountForm } from "./components";
import { isUserAuthenticated } from "utils";
import { Redirect } from "react-router-dom";
import { routes } from "config";

export const ActivateAccountView = () => {
    const { authenticatedUser, expiredUser } = isUserAuthenticated();
    if (authenticatedUser) {
        return <Redirect to={routes.app} />;
    } else if (expiredUser) {
        return <Redirect to={routes.login} />;
    }

    return (
        <>
            <DocumentHead title="Activate Account" />
            <AuthLayout>
                <ActivateAccountForm />
            </AuthLayout>
        </>
    );
};
