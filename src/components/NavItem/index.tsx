import {ReactElement} from 'react';
import {Container} from './styles';

type NavItemProps = {
  title: string;
  // eslint-disable-next-line react/require-default-props
  isActive?: boolean;
};

export function NavItem({title, isActive}: NavItemProps): ReactElement {
  return (
    <Container isActive={isActive}>
      <a href="/">{title}</a>
    </Container>
  );
}
