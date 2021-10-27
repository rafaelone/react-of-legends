import {ReactElement} from 'react';
import {Header} from '../../components/Header';
import {SubNav} from '../../components/SubNav';
import {OverviewProfile} from '../../components/Profile';

export function Profile(): ReactElement {
  return (
    <>
      <div>
        <Header />
        {/* <SubNav /> */}
        <OverviewProfile />
      </div>
    </>
  );
}
