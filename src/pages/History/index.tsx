import {ReactElement} from 'react';
import {Header} from '../../components/Header';
import {MatchHistory} from '../../components/History';
import {NavProfile} from '../../components/NavProfile';

export function History(): ReactElement {
  return (
    <>
      <div>
        <Header />
        <NavProfile />
        <MatchHistory />
      </div>
    </>
  );
}
