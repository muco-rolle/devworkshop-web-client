import React from "react";
import { DocumentHead } from "app/components";
import { AuthLayout } from "app/layouts";
import { ActivateAccountForm } from "./components";

export const ActivateAccountView = () => {
    return (
        <>
            <DocumentHead title="Activate Account" />
            <AuthLayout>
                <ActivateAccountForm />
            </AuthLayout>
        </>
    );
};
