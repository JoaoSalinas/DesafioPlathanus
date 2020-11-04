import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  padding: 18px 30px;
  max-width: 100vw;
  height: 18px;
  padding: '80px 150px';

  nav {
    a {
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      transition: opacity 0.2s;
      font-weight: 500;
      padding-top: 14px;
      font-family: 'Helvetica Neue', Helvetica;

      & + a {
        margin-left: 32px;
      }

      &:hover {
        border-top: 4px solid #fff;
        cursor: pointer;
      }

      &.active {
        border-top: 4px solid #fff;
        font-weight: bolder;
      }
    }
  }

  img {
    width: 160px;
    height: 30px;
  }
`;
