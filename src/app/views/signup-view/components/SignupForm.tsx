import React from "react";
import { Form, Input, Button } from "rsuite";

import { validationSchemas } from "config";
import { FormField } from "app/components";

export const SignupForm = () => {
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

        console.log(formValue);
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

            <Button appearance="primary" block onClick={handleSubmit} size="md">
                Signup
            </Button>
        </Form>
    );
};
