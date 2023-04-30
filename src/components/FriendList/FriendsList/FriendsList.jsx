import css from "./FriendsList.module.css";
import { FriendsListItem } from '../FriendsItem/FriendListItem';
import propTypes from 'prop-types'; 

export const FriendsList = ({friends}) => {
return (
      <ul className={css.friend_list}>
        {
          friends.map(friend => (
            <li className={css.item} key={friend.id}>
               <FriendsListItem friend = {friend}/> 
            </li>
          )   
          )
        }
      
    </ul> 
)
}

FriendsList.propTypes ={
  id: propTypes.number,
}
