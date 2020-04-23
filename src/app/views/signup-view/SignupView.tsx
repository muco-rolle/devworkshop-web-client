import React from "react";
import { DocumentHead } from "app/components";
import { AuthLayout } from "app/layouts";

export const SignupView = () => {
    return (
        <>
            <DocumentHead title="Signup" />
            <AuthLayout>
                <h1>Signup View</h1>
            </AuthLayout>
        </>
    );
};
