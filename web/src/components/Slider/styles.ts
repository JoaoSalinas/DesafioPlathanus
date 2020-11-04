import styled from 'styled-components';
import background from '../../assets/slider/background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  background: url(${background}) no-repeat center;
  background-size: 100%;
  margin-top: -120px;

  @media (max-width: 800px) {
    margin-top: -120px;
  }
`;

export const Title = styled.div`
  background: transparent;
  color: #fff;
  font-size: 84px;
  font-weight: bold;
  text-align: center;
  max-width: 1255px;

  font-family: sans-serif;
`;
