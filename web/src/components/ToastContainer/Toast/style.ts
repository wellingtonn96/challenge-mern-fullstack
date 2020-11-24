import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  display: flex;
  position: relative;
  background: #fddede;
  margin: 20px;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);
  color: #c53030;

  & + div {
    margin-top: 10px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    color: inherit;
    background: transparent;
    border: 0;
    opacity: 0.6;
  }
`;
