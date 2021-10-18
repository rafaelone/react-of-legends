import styled from 'styled-components';

export const Container = styled.aside`
  width: 240px;

  background-color: rgba(1, 10, 19, 0.7333333333333333);
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;

  @media screen and (max-width: 1450px) {
    width: 240px;
  }
`;
