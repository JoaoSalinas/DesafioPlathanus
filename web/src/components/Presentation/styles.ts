import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fff;
  width: 100%;
  padding: 0 16px;
  color: #828181;
  margin-top: 100px;

  h2 {
    font-size: 24x;
    font-family: 'Helvetica Neue', Helvetica;
    letter-spacing: 3px;
    font-weight: 500;
    margin-top: 80px;
    text-transform: uppercase;
  }

  p {
    margin: 40px;
  }
`;
