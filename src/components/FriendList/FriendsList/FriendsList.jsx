import propTypes from 'prop-types'; 
import css from "./FriendsList.module.css";
import friends from "friends.json";
import { FriendsItem } from '../FriendsItem/FriendsItem';

export const FriendsList = (friends) => {
return (
    <ul className={css.friend_list}>
        <FriendsItem friends = {friends}/>
  </ul> 
)
}

FriendsList.propTypes = {
friends: propTypes.arrayOf(
    propTypes.shape(
        {
        avatar: propTypes.string,
        name: propTypes.string,
        isOnline: propTypes.bool,
        id: propTypes.number,
    }
) )
}