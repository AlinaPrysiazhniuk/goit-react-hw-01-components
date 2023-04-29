import css from "./FriendsList.module.css";
import { FriendsItem } from '../FriendsItem/FriendsItem';

export const FriendsList = ({friends}) => {
return (
    <ul className={css.friend_list}>
        <FriendsItem friends = {friends}/>
  </ul> 
)
}

