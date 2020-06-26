import gql from "graphql-tag";

export const LOG_IN = gql`
  mutation($password: String!, $matriculation_number: String!) {
    logIn(password: $password, matriculation_number: $matriculation_number) {
      token
    }
  }
`;

export const SIGN_UP = gql`
  mutation(
    $first_name: String!
    $level: Int!
    $last_name: String!
    $matriculation_number: String!
    $password: String!
    $department: String!
  ) {
    signUp(
      first_name: $first_name
      level: $level
      last_name: $last_name
      matriculation_number: $matriculation_number
      password: $password
      department: $department
    ) {
      token
    }
  }
`;

export const GET_STUDENT = gql`
  {
    student {
      id
      first_name
      last_name
      email
      level
      department
      matriculation_number
      profile_image
    }
  }
`;

export const GET_LEVEL_COURSES = gql`
  query($level: Int!) {
    coursesByLevel(level: $level) {
      id
      code
      credit_load
      title
      semester
    }
  }
`;
