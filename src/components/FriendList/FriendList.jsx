import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import css from 'components/FriendList/FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <div className={css.friendsSection}>
      <ul className={css.friendList}>
        {friends.map(friend => {
          return (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          );
        })}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
