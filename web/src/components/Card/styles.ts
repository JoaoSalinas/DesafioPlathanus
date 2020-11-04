import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  &:hover {
    background: ${shade(0.1, '#fff')};
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 60px;
  max-width: 100%;
  height: 200px;
`;

export const Data = styled.div`
  display: block;
  text-align: center;
  color: #312e38;
  padding: 16px;
  h2 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  p {
    font-size: 12px;
  }
`;
