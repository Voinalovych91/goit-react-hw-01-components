import { PropTypes } from 'prop-types';
import { ItemCard, Status, Avatar, Name } from "./Friend.styles";

export const FriendCard = ({ friend: { avatar, name, isOnline}}) => {
    return (
        <ItemCard>
            <Status switch={isOnline}></Status>
            <Avatar src={avatar} alt={name} width="120" />
            <Name>{name}</Name>
        </ItemCard>
    );
};

FriendCard.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};