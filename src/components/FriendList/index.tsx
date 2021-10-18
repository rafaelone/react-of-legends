import {ReactElement} from 'react';
import {UserInformation} from '../UserInformation';
import {Container, Social} from './styles';

import AddIcon from '../../assets/icons/add.png';
import AddGroupIcon from '../../assets/icons/add-group.png';
import OptionsIcon from '../../assets/icons/options.png';
import FinderIcon from '../../assets/icons/finder.png';

export function FriendList(): ReactElement {
  return (
    <Container>
      <UserInformation />
      <Social>
        <span>Social</span>
        <div>
          <img src={AddIcon} alt="Adicionar amigo" />
          <img src={AddGroupIcon} alt="Adicionar grupo de amigo" />
          <img src={OptionsIcon} alt="Opções" />
          <img src={FinderIcon} alt="Buscar amigo" />
        </div>
      </Social>
    </Container>
  );
}
