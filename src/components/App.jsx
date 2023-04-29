import { Profile } from "./Profile/Profile";
import user from "user.json";

export const App = ({username, tag, location, avatar, followers, views, likes}) => {
  return (
    <>
      <Profile 
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
    />
    </>
  );
};
