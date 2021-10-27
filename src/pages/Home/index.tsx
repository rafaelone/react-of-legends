import {ReactElement} from 'react';
import {FriendList} from '../../components/FriendList';
import {Header} from '../../components/Header';
import {OverViewHome} from '../../components/OverviewHome';
import {SubNav} from '../../components/SubNav';
import {SubNavItem} from '../../components/SubNavItem';
import {ContainerHome} from './styles';

export function Home(): ReactElement {
  return (
    <ContainerHome>
      <Header />
      <FriendList />
      <SubNav>
        <SubNavItem title="Overview" />
        <SubNavItem title="Patch Notes" />
      </SubNav>
      <OverViewHome />
    </ContainerHome>
  );
}
