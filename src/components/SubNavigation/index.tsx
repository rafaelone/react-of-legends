import {ReactNode, ReactElement} from 'react';
import {Container} from './styles';

type SubNavigationProps = {
  children: ReactNode;
};

export function SubNavigation({children}: SubNavigationProps): ReactElement {
  return (
    <Container>
      <ul>{children}</ul>
    </Container>
  );
}
