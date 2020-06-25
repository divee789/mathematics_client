import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import gql from "graphql-tag";

export default class GraphQl {
  public client: ApolloClient<unknown>;

  constructor() {
    const httpLink = createHttpLink({
      uri: "http://localhost:3100/graphql",
    });
    const authLink = setContext((_, { headers }) => {
      const token = localStorage.getItem("token");
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : null,
        },
      };
    });
    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
    this.client = client;
  }

  testApi = async () => {
    try {
      const res = await this.client.query({
        query: gql`
          {
            testApi {
              message
            }
          }
        `,
      });
      console.log(res);
    } catch (error) {
      console.log("gql", error);
    }
  };

  signIn = async () => {
    try {
      const res = await this.client.mutate({
        mutation: gql`
          {
            logIn(password: "Divee789**", matriculation_number: "PSC1607670") {
              token
            }
          }
        `,
      });
      console.log(res.data);
      localStorage.setItem("access_token", res.data.token);
      return res.data;
    } catch (error) {
      console.log("gql", error);
    }
  };

  getStudent = async () => {
    try {
      const res = await this.client.query({
        query: gql`
          {
            student {
              id
              first_name
              last_name
              email
              department
              matriculation_number
              profile_image
            }
          }
        `,
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log("gql", error);
    }
  };
}
