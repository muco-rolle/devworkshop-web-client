import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
   __typename?: 'Query';
  demo: Scalars['String'];
  projects: Array<ProjectType>;
  project: ProjectType;
};


export type QueryProjectArgs = {
  projectId: Scalars['String'];
};

export type ProjectType = {
   __typename?: 'ProjectType';
  id: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  user: UserType;
  boards: Array<BoardType>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserType = {
   __typename?: 'UserType';
  id: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  active: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type BoardType = {
   __typename?: 'BoardType';
  id: Scalars['String'];
  title: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
   __typename?: 'Mutation';
  signup: UserType;
  activateAccount: ActivateAccountType;
  login: LoginType;
  createBoard: BoardType;
  updateBoard: BoardType;
  deleteBoard: BoardType;
  createProject: ProjectType;
  updateProject: ProjectType;
  deleteProject: ProjectType;
};


export type MutationSignupArgs = {
  user: SignupInput;
};


export type MutationActivateAccountArgs = {
  code: Scalars['String'];
};


export type MutationLoginArgs = {
  user: LoginInput;
};


export type MutationCreateBoardArgs = {
  projectId: Scalars['String'];
  board: BoardInput;
};


export type MutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  board: BoardInput;
};


export type MutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type MutationCreateProjectArgs = {
  project: ProjectInput;
};


export type MutationUpdateProjectArgs = {
  project: ProjectInput;
  projectId: Scalars['String'];
};


export type MutationDeleteProjectArgs = {
  projectId: Scalars['String'];
};

export type SignupInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ActivateAccountType = {
   __typename?: 'ActivateAccountType';
  username: Scalars['String'];
  active: Scalars['Boolean'];
  token: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginType = {
   __typename?: 'LoginType';
  token: Scalars['String'];
};

export type BoardInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type ProjectInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type ActivateAccountInput = {
  code: Scalars['String'];
};

export type ActivateAccountMutationVariables = {
  code: Scalars['String'];
};


export type ActivateAccountMutation = (
  { __typename?: 'Mutation' }
  & { activateAccount: (
    { __typename?: 'ActivateAccountType' }
    & Pick<ActivateAccountType, 'active' | 'token' | 'username'>
  ) }
);

export type LoginMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginType' }
    & Pick<LoginType, 'token'>
  ) }
);

export type SignupMutationVariables = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'UserType' }
    & Pick<UserType, 'id' | 'username' | 'email' | 'active'>
  ) }
);


export const ActivateAccountDocument = gql`
    mutation activateAccount($code: String!) {
  activateAccount(code: $code) {
    active
    token
    username
  }
}
    `;
export type ActivateAccountMutationFn = ApolloReactCommon.MutationFunction<ActivateAccountMutation, ActivateAccountMutationVariables>;

/**
 * __useActivateAccountMutation__
 *
 * To run a mutation, you first call `useActivateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activateAccountMutation, { data, loading, error }] = useActivateAccountMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useActivateAccountMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ActivateAccountMutation, ActivateAccountMutationVariables>) {
        return ApolloReactHooks.useMutation<ActivateAccountMutation, ActivateAccountMutationVariables>(ActivateAccountDocument, baseOptions);
      }
export type ActivateAccountMutationHookResult = ReturnType<typeof useActivateAccountMutation>;
export type ActivateAccountMutationResult = ApolloReactCommon.MutationResult<ActivateAccountMutation>;
export type ActivateAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<ActivateAccountMutation, ActivateAccountMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(user: {email: $email, password: $password}) {
    token
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation signup($username: String!, $email: String!, $password: String!) {
  signup(user: {username: $username, email: $email, password: $password}) {
    id
    username
    email
    active
  }
}
    `;
export type SignupMutationFn = ApolloReactCommon.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
