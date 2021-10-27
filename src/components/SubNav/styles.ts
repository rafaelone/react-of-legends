import styled from 'styled-components';

export const NavbarProfile = styled.nav`
  max-width: 1065px;
  width: 100%;
  padding: 0 70px;
  margin-top: 95px;

  ul {
    display: flex;
    list-style: none;
    li {
      button {
        background: transparent;
        border: 0;
        color: #beb088;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: bold;
        padding: 15px;
        cursor: pointer;
        &:hover {
          transition-duration: 0.2s;
          color: #fff;
        }
      }
    }
  }
`;
