import React from 'react';
import ComponentBeers from './Beers';

const ComponentProducts = () => {
  const title = 'Products';
  return (
    <div className="container-products">
      <h1 className="title-products">{title}</h1>
      <ComponentBeers />
    </div>
  );
};

export default ComponentProducts;
