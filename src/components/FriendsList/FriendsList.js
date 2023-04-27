import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendsListItem';
export const FriendsList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <FriendsListItem item={item} />
        </li>
      ))}
    </ul>
  );
};

FriendsList.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
