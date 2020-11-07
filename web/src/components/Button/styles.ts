import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  border-radius: 20px;
  border: none;
  padding: 10px 16px;
  color: #312e38;
  transition: background-color 0.2s;

  & a {
    text-decoration: none;
    color: #312e38;
  }
  &.action {
    width: 160px;
    height: 50px;
    margin-top: 40px;
    color: #312e38;
    background-color: #fff;
    width: 225px;
    padding: 8px;
    border-radius: 20px;
    text-transform: uppercase;
  }

  &.scroll {
    background-color: #fff;
    position: absolute;
    bottom: 0;
    margin-bottom: 100px;
    opacity: 0.7;
  }

  &.scroll svg {
    color: #fff;
  }

  &:hover {
    background: ${shade(0.25, '#fff')};
  }
`;
