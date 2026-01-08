//REST API calls (axios)

import axios from "axios";
export type StudentInput = {
  name: string;
  age: number;
  email: string;
};
const MOCK_BASE_URL = "http://localhost:5000";

// GET all students
export const fetchStudents = async () => {
  const res = await axios.get(`${MOCK_BASE_URL}/students`);
  return res.data;
};

// GET single student
export const fetchStudentById = async (id: number | string) => {
  const res = await axios.get(`${MOCK_BASE_URL}/students/${id}`);
  return res.data;
};

// POST new student
export const addStudent = async (student: StudentInput) => {
  const res = await axios({
    method: "post",
    url: `${MOCK_BASE_URL}/students`,
    data: student,
  });
  return res.data;
};

// PUT update student
export const updateStudent = async (
  id: number | string,
  student: StudentInput
) => {
  const res = await axios({
    method: "put",
    url: `${MOCK_BASE_URL}/students/${id}`,
    data: student,
  });
  return res.data;
};

// DELETE student
export const deleteStudent = async (id: number | string) => {
  const res = await axios.delete(`${MOCK_BASE_URL}/students/${id}`);
  return res.data;
};
