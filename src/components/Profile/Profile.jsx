import propTypes from 'prop-types'; 
import css from "./Profile.module.css";
import {username, tag, location, avatar, followers, views, likes} from "user.json";


export const Profile =({username, tag, location, avatar, followers, views, likes}) => {
    return (
    <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt={username}
        className={css.avatar}
        width="100"
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
  )
}

Profile.propTypes = {
username: propTypes.string.isRequired,
tag: propTypes.string.isRequired,
location: propTypes.string.isRequired,
avatar: propTypes.string.isRequired,
stats: propTypes.exact({
    label: propTypes.string.isRequired,
    quantity: propTypes.number.isRequired,
})

}