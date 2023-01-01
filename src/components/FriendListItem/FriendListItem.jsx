import PropTypes from 'prop-types';
import css from './FriendItem.module.css';

export function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (
      <li className={css.friendItem} >
            <span className={isOnline ? css.statusOnline : css.statusOffline}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt={name} width="80" />
            <p className={css.name}>{name} </p>
      </li>
    );
  }

  FriendListItem.propTypes = {
    friend: PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  };