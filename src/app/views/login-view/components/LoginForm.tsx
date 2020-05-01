import React from "react";
import { Form, Input, Button } from "rsuite";

import { validationSchemas, routes } from "config";
import { FormField } from "app/components";
import { useLoginMutation } from "app/graphql";
import { redirectTo, storage, notify, formatError } from "utils";

export const LoginForm = () => {
    const [login, { loading }] = useLoginMutation();
    // TODO: add form types
    let form: any = null;

    const [formValue, setFormValue] = React.useState({
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
            const response = await login({ variables: { ...formValue } });
            if (response.data) {
                const { token } = response.data.login;

                const devworkshop = storage.get("devworkshop");
                devworkshop.token = token;
                storage.save(devworkshop);

                notify({
                    type: "success",
                    title: `You're now connected.`,
                    message: `Have fun with your project, build exciting things.`,
                    duration: 20000,
                });

                redirectTo(routes.app);
            }
        } catch ({ message }) {
            notify({
                type: "danger",
                title: `Login failed`,
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
            model={validationSchemas.login}
            autoComplete="off"
        >
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
                Login
            </Button>
        </Form>
    );
};
