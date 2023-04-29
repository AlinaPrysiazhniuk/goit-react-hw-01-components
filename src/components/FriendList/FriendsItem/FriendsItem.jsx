import propTypes from 'prop-types'; 
import css from "./FriendsItem.module.css";
import friends from "friends.json";

export const FriendsItem = ({avatar, name, isOnline, id}) => {
return (
    friends.map(({avatar, name, isOnline, id})=> (
        <li className={css.item} key={id}>
            <span className={css.status}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt={name} width="48"/>
            <p className={css.name}>{name}</p>
        </li> 
))
)
}


FriendsItem.propTypes = {
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