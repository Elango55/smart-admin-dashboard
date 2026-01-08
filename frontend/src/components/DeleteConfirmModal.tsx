import Modal from "./Modal";
import { Button } from "../styles";
import styled from "styled-components";

const Message = styled.p`
  font-size: 15px;
  line-height: 1.5;
`;

type Props = {
  studentName: string;
  onConfirm: () => void;
  onClose: () => void;
};

export default function DeleteConfirmModal({
  studentName,
  onConfirm,
  onClose,
}: Props) {
  return (
    <Modal
      title="Delete Student"
      onClose={onClose}
      footer={
        <>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            onClick={onConfirm}
            style={{ background: "#dc2626" }}
          >
            Delete
          </Button>
        </>
      }
    >
      <Message>
        Are you sure you want to delete{" "}
        <strong>{studentName}</strong>?  
        This action cannot be undone.
      </Message>
    </Modal>
  );
}
