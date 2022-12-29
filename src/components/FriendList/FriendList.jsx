import PropTypes from 'prop-types';
import css from './Friends.module.css';


export function FriendList({ friends }) {
    return  (
        <ul className={css.friendList}>
            {friends.map(friend => (
            <li className={css.friendItem} key={friend.id}>
                <span className={friend.isOnline ? css.statusOnline : css.statusOffline}>{friend.isOnline}</span>
                <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
                <p className={css.name}>{friend.name} </p>
            </li>
             ))}  
        </ul>
    )
} 

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.oneOf([false, true]),
        })        
    ).isRequired,
  };