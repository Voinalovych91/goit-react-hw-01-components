import { PropTypes } from "prop-types";
import { FriendCard } from "./FrienCard";
import { List, Item } from "./Friend.styles";

export const FriendList = ( { friends }) => {
    return (        
        <List> 
            {friends.map((friend) => (
                <Item key={friend.id}>
                    <FriendCard friend={friend} />
                </Item>
            ))}                   
        </List>       
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        })
    ).isRequired,
};