import React from 'react';

import Toast from './Toast';

import { Container } from './style';

export interface ToastMessages {
  id: string;
  type?: 'sucess' | 'error' | 'info';
  title: string;
  description: string;
}

interface messageProps {
  messages: ToastMessages[];
}
const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast />
      <Toast />
      <Toast />
    </Container>
  );
};

export default ToastContainer;
