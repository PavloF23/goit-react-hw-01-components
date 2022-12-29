import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../data/user';
import data from '../data/data';

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
      username={user.username}  //ім'я користувача
      tag={user.tag}            //тег в соціальній мережі
      location={user.location}  //місто і країна
      avatar={user.avatar}      //посилання на зображення
      stats={user.stats}        // об'єкт з інформацією про активності
      />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />

    
    </div>
  );
};
