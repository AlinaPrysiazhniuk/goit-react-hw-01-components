import propTypes from 'prop-types'; 
import css from "./FriendsListItem.module.css";

export const FriendsListItem = ({friend: {avatar, name, isOnline}}) => {
return (
        <>
            { isOnline === true ? <span className={css.status_online}></span>  : <span className={css.status_offline}></span>}
            <img className={css.avatar} src={avatar} alt={name} width="48"/>
            <p className={css.name}>{name}</p>
        </> 

)
}


FriendsListItem.propTypes = {
friend: propTypes.shape( {
    avatar: propTypes.string,
    name: propTypes.string,
    isOnline: propTypes.bool,
}),
}