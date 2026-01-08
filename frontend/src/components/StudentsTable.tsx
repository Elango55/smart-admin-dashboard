import {
  GET_STUDENTS,
  ADD_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from "../graphql/queries";

import type {
  StudentsQueryData,
  Student,
  StudentInput,
  AddStudentResult,
  UpdateStudentResult,
  DeleteStudentResult,
} from "../type/students";

import { Container, Table, Button } from "../styles";
import { useState } from "react";
import StudentFormModal from "./StudentFormModal";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { useQuery, useMutation } from "@apollo/client/react";

export default function StudentsTable() {
  const { data } = useQuery<StudentsQueryData>(GET_STUDENTS);

  const [addStudent] = useMutation<AddStudentResult, { input: StudentInput }>(
    ADD_STUDENT
  );
  const [updateStudent] = useMutation<
    UpdateStudentResult,
    { id: string; input: StudentInput }
  >(UPDATE_STUDENT);

  const [deleteStudent] = useMutation<DeleteStudentResult, { id: string }>(
    DELETE_STUDENT
  );

  const [editStudent, setEditStudent] = useState<Student | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Student | null>(null);

  const handleSave = (input: StudentInput) => {
    if (editStudent?.id) {
      updateStudent({
        variables: { id: editStudent.id, input },
        optimisticResponse: {
          updateStudent: {
            __typename: "Student",
            id: editStudent.id,
            ...input,
          },
        },
      });
    } else {
      addStudent({
        variables: { input },
        optimisticResponse: {
          addStudent: {
            __typename: "Student",
            id: "temp-id",
            ...input,
          },
        },
        update(cache, { data }) {
          const existing = cache.readQuery<StudentsQueryData>({
            query: GET_STUDENTS,
          });

          cache.writeQuery({
            query: GET_STUDENTS,
            data: {
              students: [...(existing?.students || []), data!.addStudent],
            },
          });
        },
      });
    }
    setEditStudent(null);
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;

    deleteStudent({
      variables: { id: deleteTarget.id },
      optimisticResponse: { deleteStudent: true },
      update(cache) {
        const existing = cache.readQuery<StudentsQueryData>({
          query: GET_STUDENTS,
        });

        cache.writeQuery({
          query: GET_STUDENTS,
          data: {
            students: existing!.students.filter(
              (s) => s.id !== deleteTarget.id
            ),
          },
        });
      },
    });

    setDeleteTarget(null);
  };

  return (
    <Container>
      <Button onClick={() => setEditStudent({} as Student)}>Add Student</Button>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.email}</td>
              <td>
                <Button onClick={() => setEditStudent(s)}>Edit</Button>
                <Button
                  onClick={() => setDeleteTarget(s)}
                  style={{ marginLeft: 8, background: "#dc2626" }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {editStudent && (
        <StudentFormModal
          student={editStudent.id ? editStudent : undefined}
          onSave={handleSave}
          onClose={() => setEditStudent(null)}
        />
      )}

      {deleteTarget && (
        <DeleteConfirmModal
          studentName={deleteTarget.name}
          onConfirm={confirmDelete}
          onClose={() => setDeleteTarget(null)}
        />
      )}
    </Container>
  );
}
