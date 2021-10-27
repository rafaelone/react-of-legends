import {ReactElement, useCallback, useState} from 'react';
import {FriendList} from '../../components/FriendList';
import {Header} from '../../components/Header';
import {OverViewHome} from '../../components/OverviewHome';
import {PatchNotes} from '../../components/PatchNotes';
import {SubNav} from '../../components/SubNav';
import {SubNavItem} from '../../components/SubNavItem';
import {ContainerHome} from './styles';

export function Home(): ReactElement {
  const [subNavigation, setSubNavigation] = useState<string>('overview');

  const handleChangeSubNavigation = useCallback((title: string) => {
    setSubNavigation(title);
  }, []);

  return (
    <ContainerHome>
      <Header />
      <FriendList />
      <SubNav>
        <SubNavItem
          title="Overview"
          handleChange={() => handleChangeSubNavigation('overview')}
        />
        <SubNavItem
          title="Patch Notes"
          handleChange={() => handleChangeSubNavigation('patch')}
        />
      </SubNav>
      {subNavigation === 'overview' && <OverViewHome />}
      {subNavigation === 'patch' && <PatchNotes />}
    </ContainerHome>
  );
}
