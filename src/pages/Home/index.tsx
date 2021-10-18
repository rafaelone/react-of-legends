import {ReactElement} from 'react';
import {Header} from '../../components/Header';
import {ContainerHome} from './styles';

export function Home(): ReactElement {
  return (
    <ContainerHome>
      <Header />
    </ContainerHome>
  );
}
