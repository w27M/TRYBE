import React from 'react';
import CheckoutBody from './CheckoutBody';

const ComponentCheckout = () => {
  const title = 'Checkout';
  return (
    <div className="checkout-int">
      <h1 className="title-checkout">{title}</h1>
      <h3 data-testid="top-title" className="sub-title">Finalizar Pedido</h3>
      <CheckoutBody />
    </div>
  );
};

export default ComponentCheckout;
