import { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";
import type { Student, StudentInput } from "../type/students";
import { Button } from "../styles";

const Field = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
`;

type Props = {
  student?: Student;
  onSave: (input: StudentInput) => void;
  onClose: () => void;
};

export default function StudentFormModal({
  student,
  onSave,
  onClose,
}: Props) {
  const [form, setForm] = useState<StudentInput>({
    name: student?.name ?? "",
    age: student?.age ?? 0,
    email: student?.email ?? "",
  });

  return (
    <Modal
      title={student ? "Edit Student" : "Add Student"}
      onClose={onClose}
      footer={
        <>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={() => onSave(form)}>Save</Button>
        </>
      }
    >
      <Field
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <Field
        type="number"
        placeholder="Age"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: +e.target.value })}
      />

      <Field
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
    </Modal>
  );
}
