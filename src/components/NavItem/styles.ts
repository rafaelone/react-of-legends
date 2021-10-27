import styled, {css} from 'styled-components';

type ContainerProps = {
  isActive?: boolean;
};

export const Container = styled.li<ContainerProps>`
  color: #beb088;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 16px 24px;
  display: block;
  transition-duration: 0.2s;
  cursor: pointer;
  text-decoration: none;

  ${props =>
    props.isActive &&
    css`
      color: #f0e6d2 !important;
    `}
`;
