import {ReactElement} from 'react';

type SubNavItem = {
  title: string;
};

export function SubNavItem({title}: SubNavItem): ReactElement {
  return (
    <li>
      <a href="/">{title}</a>
    </li>
  );
}
