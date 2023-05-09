import { useFollowUserMutation } from "../api/api";
import { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ user }) => {
  const [isFollow, setIsFollow] = useState(user.isFollow);
  const { mutate } = useFollowUserMutation();

  const handleFollowToggle = () => {
    mutate({ id: user.id, isFollow: !isFollow });
    setIsFollow(!isFollow);
  };

  return (
    <div className="card">
      <img src={user.avatar} alt={user.user} />
      <h3>{user.user}</h3>
      <p>Tweets: {user.tweets}</p>
      <p>Followers: {user.followers}</p>
      <button onClick={handleFollowToggle}>
        {isFollow ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

Card.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
