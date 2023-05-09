const Card = ({ user }) => {
  return (
    <div className="card">
      <img src={user.avatar} alt={`${user.user}'s avatar`} />
      <div className="card-body">
        {/* <h5 className="card-title">{user.user}</h5> */}
        <p className="card-text">{`Tweets: ${user.tweets}`}</p>
        <p className="card-text">{`Followers: ${user.followers}`}</p>
      </div>
    </div>
  );
};

export default Card;
