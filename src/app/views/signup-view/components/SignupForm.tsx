import React from "react";
import { Form, Input, Button } from "rsuite";

import { validationSchemas, routes } from "config";
import { FormField } from "app/components";
import { useSignupMutation } from "app/graphql";
import { notify, storage, redirectTo, formatError } from "utils";

export const SignupForm = () => {
    const [signup, { loading }] = useSignupMutation();

    // TODO: add form types
    let form: any = null;

    const [formValue, setFormValue] = React.useState({
        username: "",
        email: "",
        password: "",
    });

    const [formError, setFormError] = React.useState({});

    const handleSubmit = async () => {
        /*
		second exclamation mark to prevent 
		Object is possibly 'null' warning
	*/
        if (!form!.check()) {
            console.log(formError);
            return;
        }

        try {
            const response = await signup({ variables: { ...formValue } });

            if (response.data) {
                const { username, email, active } = response.data?.signup;

                storage.save({ active });

                notify({
                    type: "success",
                    title: `${username} Signed up successfully`,
                    message: `Please check your inbox we sent you a validation code on ${email}.`,
                    duration: 20000,
                });

                redirectTo(routes.activateAccount);
            }
        } catch ({ message }) {
            notify({
                type: "danger",
                title: `Signup failure`,
                message: formatError(message),
                duration: 20000,
            });
        }
    };

    return (
        <Form
            ref={(ref: any) => (form = ref)}
            onChange={(value: any) => {
                setFormValue({ ...value });
            }}
            onCheck={(formError) => {
                setFormError({ formError });
            }}
            formValue={formValue}
            model={validationSchemas.signup}
            autoComplete="off"
        >
            <FormField
                type="text"
                name="username"
                placeholder={"enter your username"}
                component={Input}
            />

            <FormField
                type="email"
                name="email"
                placeholder={"enter your email"}
                component={Input}
            />

            <FormField
                type="password"
                name="password"
                placeholder="enter your password"
                component={Input}
            />

            <Button
                appearance="primary"
                block
                onClick={handleSubmit}
                size="md"
                loading={loading}
            >
                Signup
            </Button>
        </Form>
    );
};
