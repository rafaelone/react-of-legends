import {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {NavbarProfile} from './styles';

export function NavProfile(): ReactElement {
  return (
    <NavbarProfile>
      <ul>
        <li>
          <a href="/">Overview</a>
        </li>
        <li>
          <a href="/">Match history</a>
        </li>
      </ul>
    </NavbarProfile>
  );
}
