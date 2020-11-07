import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  & p {
    padding: 10px;
  }

  &:last-child {
    margin-bottom: 100px;
  }

  & input {
    padding: 18px;
    border: 1px solid #ccc;
    margin-right: 30px;
    width: 100%;
    border-radius: 20px;
  }

  & > input:last-child {
    padding: 18px;
    border: 1px solid #ccc;
    margin-right: 30px;
    width: 100%;
    border-radius: 20px;
  }

  & p {
    color: #828181;
  }

  & form button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
  }

  & form {
    margin-left: 120px;
  }
`;
