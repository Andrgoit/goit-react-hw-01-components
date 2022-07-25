import css from 'components/FriendList/FriendListItem.module.css';

export function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <li className={css.item} key={id}>
      <span className={isOnline ? css.onlineIcon : css.offlineIcon}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
