// import React from 'react';
import Profile from './components/Profile/Profile/Profile';
import FriendList from './components/Profile/Friends/FriendList';
import userData from './components/Profile/Profile/Profile.json';
import friends from './components/Profile/Friends/FrendList.json';
import TransactionHistory from './components/Profile/transactions/TransactionHistory';
import transaction from './components/Profile/transactions/transaction.json';
import './App.css';

const App = () => (
  <div>
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    />
    <FriendList friends={friends} />
    <TransactionHistory items={transaction} />
  </div>
);

export default App;

// // import React from 'react';
// import Profile from './components/Profile/Profile/Profile';
// import userData from './components/Profile/Profile/Profile.json';

// import './App.css';

// const App = () => {
//   return (
//     <div className="app">
//       <Profile
//         name={userData.username}
//         tag={userData.tag}
//         location={userData.location}
//         image={userData.avatar}
//         stats={userData.stats}
//       />
    
    
//     </div>
    
//   );
// };


// export default App;






