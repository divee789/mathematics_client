import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import gql from "graphql-tag";

import { ISignUp, IStudent, ILogIn } from "../interfaces";
import { GET_LEVEL_COURSES, GET_STUDENT, SIGN_UP, LOG_IN } from "./queries";

export default class GraphQl {
  public client: ApolloClient<unknown>;

  constructor() {
    const httpLink = createHttpLink({
      uri: "http://localhost:3100/graphql",
    });
    const authLink = setContext((_, { headers }) => {
      const token = localStorage.getItem("access_token");
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
  };

  signIn = async (data: ILogIn): Promise<{ token: string }> => {
    const res = await this.client.mutate({
      mutation: LOG_IN,
      variables: {
        password: data.password,
        matriculation_number: data.matriculation_number,
      },
    });
    localStorage.setItem("access_token", res.data.logIn.token);
    return res.data.logIn;
  };

  signUp = async (data: ISignUp): Promise<{ token: string }> => {
    const res = await this.client.mutate({
      mutation: SIGN_UP,
      variables: {
        password: data.password,
        matriculation_number: data.matriculation_number,
        first_name: data.first_name,
        last_name: data.last_name,
        department: data.department,
        level: data.level,
      },
    });
    localStorage.setItem("access_token", res.data.signUp.token);
    return res.data.signUp;
  };

  getStudent = async (): Promise<IStudent> => {
    const res = await this.client.query({
      query: GET_STUDENT,
    });
    return res.data.student;
  };

  getLevelCourses = async (level: number): Promise<any> => {
    const res = await this.client.query({
      query: GET_LEVEL_COURSES,
      variables: {
        level,
      },
    });

    return res.data.coursesByLevel;
  };
}
