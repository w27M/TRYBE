import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import ComponentAdmin from '../components/Admin';

const Admin = () => {
  const TITLE = 'TryBeer';
  return (
    <div className="container-register">
      <Header title={ TITLE } />
      <Menu />
      <ComponentAdmin />
    </div>
  );
};

export default Admin;
