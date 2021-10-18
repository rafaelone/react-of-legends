import {ReactElement} from 'react';
import {UserInformation} from '../UserInformation';
import {Container} from './styles';

export function FriendList(): ReactElement {
  return (
    <Container>
      <UserInformation />
    </Container>
  );
}
