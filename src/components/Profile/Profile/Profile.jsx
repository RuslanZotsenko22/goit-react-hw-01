

// import React from 'react';
import PropTypes from 'prop-types';
import '../Profile/Profile.css';



const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={image}
          alt="User avatar"
        />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span>Followers</span>
          <span className="value">{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className="value">{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className="value">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
