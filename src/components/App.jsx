import { Profile } from './Profile/Profile';

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
      username  //ім'я користувача
      tag       //тег в соціальній мережі
      location  //місто і країна
      avatar    //посилання на зображення
      stats     // об'єкт з інформацією про активності
      />
    </div>
  );
};
