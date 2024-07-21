
// import React from 'react';
import Profile from './components/Profile/Profile/Profile';
import userData from './components/Profile/Profile/Profile.json';
import FriendList from './components/Profile/Friends/FriendListItem';
import friends from './friends/Profile/Friends/Frendlist';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;






