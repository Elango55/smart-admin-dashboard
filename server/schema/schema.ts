export const typeDefs = `
  type Student {
    id: ID!
    name: String!
    age: Int!
    email: String!
  }

  type Query {
    students: [Student!]!
    student(id: ID!): Student
  }

  type Mutation {
    addStudent(name: String!, age: Int!, email: String!): Student!
    updateStudent(id: ID!, name: String!, age: Int!, email: String!): Student!
    deleteStudent(id: ID!): Boolean!
  }
`;
