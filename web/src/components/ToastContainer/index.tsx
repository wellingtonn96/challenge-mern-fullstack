import React from 'react';

import { useTransition } from 'react-spring';
import Toast from './Toast';

import { Container } from './style';

export interface ToastMessages {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description: string;
}

interface ToastContainerProps {
  messages: ToastMessages[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messageWithTransaction = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );
  return (
    <Container>
      {messageWithTransaction.map(({ item, key }) => (
        <Toast key={key} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
