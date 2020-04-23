import React from "react";
import { Form, Input, Button } from "rsuite";

import { validationSchemas } from "config";
import { FormField } from "app/components";

export const ActivateAccountForm = () => {
    // TODO: add form types
    let form: any = null;

    const [formValue, setFormValue] = React.useState({
        code: "",
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
            model={validationSchemas.activateAccount}
            autoComplete="off"
        >
            <FormField
                type="text"
                name="code"
                placeholder={"enter your verification code"}
                component={Input}
            />

            <Button appearance="primary" block onClick={handleSubmit} size="md">
                Activate Account
            </Button>
        </Form>
    );
};
