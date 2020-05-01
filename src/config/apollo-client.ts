import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-boost";
import { onError } from "apollo-link-error";

import { notify, storage } from "utils";
import { GraphQLError } from "graphql";

const GRAPHQL_URL = "http://localhost:4000/api";

const httpLink = createHttpLink({
    uri: GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const { token } = storage.get("devworkshop");
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map((graphqlError: GraphQLError) => {
            if ((graphqlError as any).path[0] === "signup") {
                console.log("graphql error");

                return notify({
                    type: "danger",
                    title: "Signup Failed.",
                    message: graphqlError.message,
                });
            } else {
                return notify({
                    type: "danger",
                    title: "Bad Request.",
                    message: graphqlError.message,
                });
            }
        });
    }

    if (networkError) {
        notify({
            type: "danger",
            title: "Network Problem",
            message: "Please check your network connection!",
        });
    }
});

const link = ApolloLink.from([errorLink, authLink, httpLink]);

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});
