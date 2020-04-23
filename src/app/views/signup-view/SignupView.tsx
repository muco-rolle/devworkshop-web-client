import React from "react";
import { DocumentHead } from "app/components";
import { AuthLayout } from "app/layouts";
import { SignupForm } from "./components";

export const SignupView = () => {
    return (
        <>
            <DocumentHead title="Signup" />
            <AuthLayout>
                <SignupForm />
            </AuthLayout>
        </>
    );
};
