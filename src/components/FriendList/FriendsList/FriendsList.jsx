import css from "./FriendsList.module.css";
import { FriendsItem } from '../FriendsItem/FriendsItem';

export const FriendsList = ({friends}) => {
return (
    <div className={css.friends_block}>
      <ul className={css.friend_list}>
        <FriendsItem friends = {friends}/>
  </ul> 
    </div>
)
}

