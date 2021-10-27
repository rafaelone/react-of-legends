import {ReactElement} from 'react';

type SubNavItem = {
  title: string;
  handleChange?: () => void;
};

export function SubNavItem({title, handleChange}: SubNavItem): ReactElement {
  return (
    <li>
      <button type="button" onClick={handleChange}>
        {title}
      </button>
    </li>
  );
}
