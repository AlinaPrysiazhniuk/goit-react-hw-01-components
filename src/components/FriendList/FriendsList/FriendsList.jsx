import css from "./FriendsList.module.css";
import propTypes from 'prop-types'; 

export const FriendsList = ({friends}) => {
return (
      <ul className={css.friend_list}>
        {friends.map(({ id, avatar, name, isOnline }) => (
         <li className={css.item} key={id}>
                { isOnline === true ? <span className={css.status_online}></span>  : <span className={css.status_offline}></span>}
                  <img className={css.avatar} src={avatar} alt={name} width="48"/>
                     <p className={css.name}>{name}</p>
         </li>
    ))}
    </ul> 
)
}

FriendsList.propTypes = {
    friend: propTypes.shape( {
        avatar: propTypes.string,
        name: propTypes.string,
        isOnline: propTypes.bool,
        id: propTypes.number,
    }),
    }