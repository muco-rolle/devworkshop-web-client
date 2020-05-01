import React from "react";
import { Form, Input, Button } from "rsuite";

import { validationSchemas, routes } from "config";
import { FormField } from "app/components";
import { useActivateAccountMutation } from "app/graphql";
import { storage, notify, formatError, redirectTo } from "utils";

export const ActivateAccountForm = () => {
    const [activateAccount, { loading }] = useActivateAccountMutation();

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

        try {
            const response = await activateAccount({
                variables: { ...formValue },
            });

            if (response.data) {
                const {
                    active,
                    token,
                    username,
                } = response.data.activateAccount;

                const devworkshop = storage.get("devworkshop");
                devworkshop.active = active;
                devworkshop.token = token;

                storage.save(devworkshop);

                notify({
                    type: "success",
                    title: `${username}'s account is activated.`,
                    message: `Have fun with your project, build exciting things.`,
                    duration: 20000,
                });

                redirectTo(routes.app);
            }
        } catch ({ message }) {
            notify({
                type: "danger",
                title: `Activate Account Failure`,
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
            model={validationSchemas.activateAccount}
            autoComplete="off"
        >
            <FormField
                type="text"
                name="code"
                placeholder={"enter your verification code"}
                component={Input}
            />

            <Button
                appearance="primary"
                block
                onClick={handleSubmit}
                size="md"
                loading={loading}
            >
                Activate Account
            </Button>
        </Form>
    );
};
