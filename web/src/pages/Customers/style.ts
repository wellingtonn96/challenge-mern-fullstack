import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1150px;
  margin: 0 auto;

  h1 {
    margin: 30px 0;
    text-align: center;
  }

  div {
    table {
      width: 100%;
      border-spacing: 0 20px;

      th {
        font-weight: normal;
        padding: 10px 32px;
        text-align: left;
        font-size: 16px;
        line-height: 24px;
      }

      td {
        padding: 10px 32px;
        border: 0;
        background: #eeee;
        font-size: 16px;
        font-weight: normal;
        color: black;

        &.title {
          color: #363f5f;
        }
        &.income {
          color: #12a454;
        }
        &.outcome {
          color: #e83f5b;
        }
      }

      td:first-child {
        border-radius: 8px 0 0 8px;
      }
    }
  }
`;

export const ButtonDelete = styled.button`
  padding: 2px 8px;
  background: transparent;
  border: transparent;
  border-radius: 5px;
  border: 2px solid red;
  padding: 10px 15px;
  color: white;
`;
