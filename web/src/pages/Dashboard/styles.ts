import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

interface MainProps {
  zIndex: boolean;
}

export const Main = styled.div<MainProps>`
  display: flex;
  align-content: center;
  flex-direction: column;
  ${props =>
    props.zIndex &&
    css`
      z-index: -1;
    `}

  p {
    text-align: left;
    margin-top: 20px;
  }

  table {
    width: 800px;
    text-align: center;
    background: white;
    margin-bottom: 50px;

    td {
      width: 800px;
    }

    thead {
      th {
        background-color: #0091ab;
        color: #ffff;
        padding: 5px;
      }
    }

    tr:nth-child(even) {
      background-color: #cacaca;
      border: 1px solid #dddddd;
    }
  }
`;

export const FormContent = styled.div`
  form {
    margin-top: 60px;
    width: 300px;
    border: 1px solid #000000;
    background: #eeee;
    padding: 20px;
  }
`;

export const Field = styled.div`
  margin-bottom: 15px;

  input {
    border: 1px solid #111111;
    width: 100%;
    padding: 0 10px;
    height: 30px;
  }
`;

export const InputSearch = styled.div`
  display: flex;
  background-color: #ffff;
  border: 1px solid #111111;

  input {
    padding: 0 10px;
    height: 30px;
    border: transparent;
  }

  button {
    background-color: transparent;
    border: transparent;
    margin-right: 10px;
    text-transform: uppercase;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const GeoLocationField = styled.div`
  margin: 50px 0;
  display: flex;

  input {
    text-align: center;
    text-transform: capitalize;
  }

  input + input {
    margin-left: 10px;
  }
`;

export const ButtonSave = styled.button`
  height: 30px;
  text-transform: uppercase;
  border: transparent;
  background-color: #00ab5d;
  width: 100%;
  color: #fff;
`;

export const ButtonResetContent = styled.div`
  width: 300px;
  background: #eeee;
  margin-top: 15px;
  border: 1px solid #000000;
  padding: 20px;
`;

export const ButtonReset = styled.button`
  height: 30px;
  text-transform: uppercase;
  border: transparent;
  background-color: #f92b2b;
  width: 100%;
  color: #fff;
`;

export const ButtonDelete = styled.button`
  padding: 2px 8px;
  background: #f92b2b;
  border: transparent;
  border-radius: 3px;
  color: white;
`;
