import type { ReactNode } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Box = styled.div`
  background: white;
  width: 420px;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  animation: pop 0.2s ease-out;

  @keyframes pop {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  gap: 10px;
`;

type Props = {
  title: string;
  children: ReactNode;
  onClose: () => void;
  footer?: ReactNode;
};

export default function Modal({ title, children, footer, onClose }: Props) {
  return (
    <Overlay onClick={onClose}>
      <Box onClick={(e) => e.stopPropagation()}>
        <Header>{title}</Header>
        {children}
        <Footer>{footer}</Footer>
      </Box>
    </Overlay>
  );
}
