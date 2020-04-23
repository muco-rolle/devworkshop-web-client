import { Schema } from 'rsuite';

const { StringType } = Schema.Types;

export const validationSchemas = {
    login: Schema.Model({
        email: StringType()
            .isEmail('Invalid email.')
            .isRequired('Email is required.'),
        password: StringType().isRequired('Password is required'),
    }),

    signup: Schema.Model({
        username: StringType().isRequired('Username is required.'),
        email: StringType()
            .isEmail('Invalid email.')
            .isRequired('Email is required.'),
        password: StringType().isRequired('Password is required.'),
    }),

    activateAccount: Schema.Model({
        code: StringType().isRequired('Verification code is required.'),
    }),
};
