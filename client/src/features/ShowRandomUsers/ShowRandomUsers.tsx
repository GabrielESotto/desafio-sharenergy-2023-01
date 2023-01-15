// Built-in

// Externos

// Internos
import { Result } from '../../interfaces/types';
import DivLoading from '../../components/DivLoading/DivLoading';
import {
  Box,
  PhotoUser,
  WrapInfo,
  Label,
  InfoLabel
} from './ShowRandomUsersElements'


type Props = {
  users: Result[];
  load: boolean;
  filter: string;
}

const ShowRandomUsers = ({users, load, filter}: Props) => {

  // Render loading gif
  if(load) {
    return <DivLoading />
  }

  return (
    <>
      {users &&
        users
        .filter(user => 
        user.email.includes(filter) || 
        user.login.username.includes(filter) ||
        user.name.first.includes(filter) || 
        user.name.last.includes(filter)
        )
        .map((user) => (
        <Box key={user.id.value + Math.random()}>
            <PhotoUser src={user.picture.large} />
            <WrapInfo>
              <Label>Nome</Label>
              <InfoLabel>{`${user.name.first} ${user.name.last}`}</InfoLabel>
            </WrapInfo>
            <WrapInfo>
              <Label>Email</Label>
              <InfoLabel>{user.email}</InfoLabel>
            </WrapInfo>
            <WrapInfo>
              <Label>Username</Label>
              <InfoLabel>{user.login.username}</InfoLabel>
            </WrapInfo>
            <WrapInfo>
              <Label>Idade</Label>
              <InfoLabel>{user.dob.age}</InfoLabel>
            </WrapInfo>
        </Box>
      ))}        
    </>
  )
}

export default ShowRandomUsers
