export interface Student {
  id: string;
  name: string;
  age: number;
  email: string;
}

export interface StudentsQueryData {
  students: Student[];
}
