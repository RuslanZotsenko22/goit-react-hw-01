// import React from 'react';
import PropTypes from 'prop-types';
import './FriendList.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-item">
      <div className="card">
        <img src={avatar} alt={`${name}'s avatar`} className="avatar" width={50} height={50} />
        <p className="name">{name}</p>
        <p className={`status ${isOnline ? 'online' : 'offline'}`}>
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
