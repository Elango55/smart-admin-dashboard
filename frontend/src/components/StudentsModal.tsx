import { useState } from "react";
import { Modal, ModalOverlay, Button } from "../styles";
import type { Student, StudentInput } from "../type/students";

type Props = {
  student?: Student;
  onSave: (input: StudentInput) => void;
  onClose: () => void;
};

export default function StudentModal({ student, onSave, onClose }: Props) {
  const [form, setForm] = useState<StudentInput>({
    name: student?.name || "",
    age: student?.age || 0,
    email: student?.email || "",
  });

  return (
    <ModalOverlay>
      <Modal>
        <h3>{student ? "Edit Student" : "Add Student"}</h3>

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: +e.target.value })}
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <br /><br />
        <Button onClick={() => onSave(form)}>Save</Button>
        <Button onClick={onClose} style={{ marginLeft: 10 }}>Cancel</Button>
      </Modal>
    </ModalOverlay>
  );
}
