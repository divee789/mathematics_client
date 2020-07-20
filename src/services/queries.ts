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
      level
      lecturer {
        id
        first_name
        last_name
        email
        title
        department
        position
      }
    }
  }
`;

export const GET_ALL_COURSES = gql`
  {
    courses {
      id
      code
      credit_load
      title
      lecturer {
        first_name
        last_name
      }
    }
  }
`;

export const GET_STUDENT_COURSE = gql`
  {
    student_courses {
      courses {
        id
        code
        title
        semester
        credit_load
      }
    }
  }
`;
