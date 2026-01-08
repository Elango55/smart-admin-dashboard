import {
  fetchStudents,
  fetchStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
  StudentInput
} from "../datasources/datasource";

export const resolvers = {
  Query: {
    students: async () => {
      return fetchStudents();
    },

    student: async (_: unknown, { id }: { id: string }) => {
      return fetchStudentById(id);
    }
  },

  Mutation: {
    addStudent: async (_: unknown, args: StudentInput) => {
      return addStudent(args);
    },

    updateStudent: async (
      _: unknown,
      { id, name, age, email }: { id: string } & StudentInput
    ) => {
      return updateStudent(id, { name, age, email });
    },

    deleteStudent: async (_: unknown, { id }: { id: string }) => {
      return deleteStudent(id);
    }
  }
};
