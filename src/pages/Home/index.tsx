import {ReactElement} from 'react';
import {FriendList} from '../../components/FriendList';
import {Header} from '../../components/Header';
import {ContainerHome} from './styles';

export function Home(): ReactElement {
  return (
    <ContainerHome>
      <Header />
      <FriendList />
    </ContainerHome>
  );
}
