import {ReactElement} from 'react';
import {Header} from '../../components/Header';
import {NavProfile} from '../../components/NavProfile';
import {OverviewProfile} from '../../components/Profile';

export function Profile(): ReactElement {
  return (
    <>
      <div>
        <Header />
        <NavProfile />
        <OverviewProfile />
      </div>
    </>
  );
}
