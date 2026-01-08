import { gql } from "@apollo/client";

export const GET_STUDENTS = gql`
  query GetStudents {
    students {
      id
      name
      age
      email
    }
  }
`;

export const ADD_STUDENT = gql`
  mutation AddStudent($input: StudentInput!) {
    addStudent(input: $input) {
      id
      name
      age
      email
    }
  }
`;

export const UPDATE_STUDENT = gql`
  mutation UpdateStudent($id: ID!, $input: StudentInput!) {
    updateStudent(id: $id, input: $input) {
      id
      name
      age
      email
    }
  }
`;

export const DELETE_STUDENT = gql`
  mutation DeleteStudent($id: ID!) {
    deleteStudent(id: $id)
  }
`;
