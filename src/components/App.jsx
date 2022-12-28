import { Profile } from './Profile/Profile';
import user from '../data/user';

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Profile 
      username={user.username}  //ім'я користувача
      tag={user.tag}            //тег в соціальній мережі
      location={user.location}  //місто і країна
      avatar={user.avatar}      //посилання на зображення
      stats={user.stats}        // об'єкт з інформацією про активності
      />
    </div>
  );
};
