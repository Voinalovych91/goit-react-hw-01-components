import PropTypes from 'prop-types';
import { Avatar, Card, Name, Status } from './FriendsListItem.styled';
// import { Status } from './FriendsListItem.styled';

export const FriendsListItem = ({ item: { avatar, name, isOnline } }) => {
  return (
    <Card>
      <Status style={{ background: isOnline ? 'green' : 'red' }}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Card>
  );
};

FriendsListItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
