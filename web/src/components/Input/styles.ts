import styled, { css } from 'styled-components';

interface Containerprops {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<Containerprops>`
  background: #fff;
  border-radius: 20px;
  padding: 8px;
  width: 175px;

  border: none;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      border-color: #666360;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: green;
    `}

  input {
    width: 145px;
    border: none;
    background-color: #fff;
    opacity: 0.8;

    &::placeholder {
      color: #666360;
      padding: 8px;
    }
  }

  svg {
    width: 16px;
    height: 16px;
    color: #666360;
  }
`;
