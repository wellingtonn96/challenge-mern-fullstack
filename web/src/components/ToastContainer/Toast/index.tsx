import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container } from './style';

const Toast: React.FC = () => {
  return (
    <Container>
      <FiAlertCircle size={24} />
      <div>
        <strong>Error</strong>
        <p>Ocorreu um erro o cadastrar</p>
      </div>
      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
