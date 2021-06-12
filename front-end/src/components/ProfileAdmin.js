import React from 'react';
import { Redirect } from 'react-router';

function ProfileAdmin() {
  const user = localStorage.getItem('data');
  const token = localStorage.getItem('token');
  const objUser = JSON.parse(user);

  if (!token) {
    return (<Redirect to="/login" />);
  }

  return (
    <div>
      <h1>Perfil</h1>
      <div className="user-profile">

        <p data-testid="profile-name">
          Nome:
          {objUser.name}
        </p>
        <br />
        <p data-testid="profile-email">
          Email:
          {objUser.email}
        </p>
      </div>
    </div>
  );
}

export default ProfileAdmin;
