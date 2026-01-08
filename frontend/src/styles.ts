import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  font-family: Arial;
`;

export const Button = styled.button`
  background: #4f46e5;
  color: white;
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #4338ca;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ddd;
    padding: 10px;
  }

  th {
    background: #f3f4f6;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
`;

export const Modal = styled.div`
  background: white;
  padding: 20px;
  width: 400px;
  margin: 100px auto;
  border-radius: 8px;
`;
