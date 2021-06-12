import React from 'react';
import ComponentProfile from '../components/Profile';
import '../css/login.css';
import '../css/profile.css';
import Header from '../components/Header';
import Menu from '../components/Menu';

const Profile = () => {
  const TITLE = 'Meu perfil';
  return (
    <div className="container-prodile">
      <Header title={ TITLE } />
      <div className="container-content">
        <Menu />
        <div className="container-int-profile">
          <ComponentProfile />
        </div>
      </div>
    </div>
  );
};

export default Profile;
