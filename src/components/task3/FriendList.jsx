import css from  "./Friends.module.css"
import PropTypes from 'prop-types';
import { Friend } from './FriendListItem'; 

export const FriendsList = ({friends}) => {
    return (
    <ul className={css.friendlist}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
              <Friend friend={friend} />
        </li>
      ))}
    </ul> 
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};