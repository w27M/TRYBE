import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import ComponentProducts from '../components/Products';
import '../css/client.css';

const Cliente = () => {
  const TITLE = 'TryBeer';
  return (
    <div className="container-register">
      <Header title={ TITLE } />
      <div className="container-body">
        <Menu />
        <ComponentProducts />
      </div>
    </div>
  );
};

export default Cliente;
