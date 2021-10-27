import styled from 'styled-components';

export const NavbarProfile = styled.nav`
  max-width: 1065px;
  width: 100%;
  padding: 0 70px;
  margin-top: 95px;

  ul {
    display: flex;
    li {
      a {
        color: #beb088;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: bold;
        padding: 15px;
        &:hover {
          transition-duration: 0.2s;
          color: #fff;
        }
      }
    }
  }
`;
