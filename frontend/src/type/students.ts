export interface Student {
  __typename?: "Student";
  id: string;
  name: string;
  age: number;
  email: string;
}

export interface StudentsQueryData {
  students: Student[];
}

export interface StudentInput {
  name: string;
  age: number;
  email: string;
}
export interface AddStudentResult {
  addStudent: Student;
}

export interface UpdateStudentResult {
  updateStudent: Student;
}

export interface DeleteStudentResult {
  deleteStudent: boolean;
}
