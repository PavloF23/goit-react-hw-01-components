import PropTypes from 'prop-types';
import css from './Friends.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';


export function FriendList({ friends }) {
    return  (
        <ul className={css.friendList}>
            {friends.map(friend => (
            <FriendListItem key={friend.id} friend={friend} />          
            ))}  
        </ul>
    )
} 

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })        
    ).isRequired,
  }; 