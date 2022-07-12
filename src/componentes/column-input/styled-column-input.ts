import styled from 'styled-components';

export const ColumnInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 70px;

  &.input-text {
    width: 50%;
  }

  &.select {
    width: 30%;
  }

  input[type="text"],
  input[type="number"],
  ::selection,
  textearea {
    border: 1px solid #201e1f;
    padding: 10px;
    height: 35px;
    border-radius: 5px;

    :focus {
        outline: 1px solid #7d2eba;
    }
  }

  select {
    padding: 0 5px;

    cursor: pointer;
  }
`;
