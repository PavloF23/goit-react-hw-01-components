import friends from '../data/friends.json';
import transactions from "../data/transactions.json";
import user from '../data/user';
import data from '../data/data';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
       style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      margin: '0 auto',
      padding: '20px',
      width: '1280px',
    }}>
      <Profile 
      username={user.username} 
      tag={user.tag}            
      location={user.location}  
      avatar={user.avatar}      
      stats={user.stats}        
      />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
        </div>
  );
};
