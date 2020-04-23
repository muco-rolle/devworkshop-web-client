import React from "react";
import { DocumentHead } from "app/components";
import { LoginForm } from "./components";
import { AuthLayout } from "app/layouts";

export const LoginView = () => {
    return (
        <>
            <DocumentHead title="Login" />
            <AuthLayout>
                <LoginForm />
            </AuthLayout>
        </>
    );
};
