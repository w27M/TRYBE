import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import numbers from '../helpers/Numbers';
import CheckoutCard from './CheckoutCard';
import api from '../services/api';

const CheckoutBody = () => {
  const history = useHistory();
  const token = localStorage.getItem('token');

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || [],
  );
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [saleFinished, setSaleFinished] = useState(false);

  const priceTotalReduced = cart.reduce(
    (curr, next) => curr + next.total,
    numbers.ZERO_REAL,
  );
  const user = JSON.parse(localStorage.getItem('data'));
  const redirectToProduct = () => {
    setSaleFinished(true);
    const time = 5000;
    const params = {
      userId: user.id,
      totalPrice: priceTotalReduced,
      deliveryAddress: street,
      deliveryNumber: houseNumber,
      status: 'Pendente',
      cart,
    };
    const postSale = async () => {
      const { data } = await api.post('/checkout', params);
      console.log(`redirectToProduct ${data}`); // deixar
    };
    postSale();
    setCart([]);
    setTimeout(() => history.push('/products'), time);
  };

  return (
    <div className="checkout-component-container">
      {!token && <Redirect to="/login" />}
      <div className="cart-itens">
        {priceTotalReduced === 0 ? (
          <h3>Não há produtos no carrinho</h3>
        ) : (
          cart.map((cartItem, index) => (
            <CheckoutCard
              key={ index }
              cartItem={ cartItem }
              index={ index }
              setCart={ setCart }
              cart={ cart }
            />
          ))
        )}
      </div>
      <div className="aside-content-checkout">
        <div>
          Valor total do carrinho
          <p data-testid="order-total-value" className="order-value">
            {`R$ ${priceTotalReduced.toFixed(2).replace('.', ',')}`}
          </p>
        </div>
        <form className="form-checkout">
          <label htmlFor="street" className="form-checkout-street">
            Rua
            <br />
            <input
              data-testid="checkout-street-input"
              id="street"
              type="street"
              name="street"
              className="label-login"
              onChange={ (event) => setStreet(event.target.value) }
            />
          </label>

          <label htmlFor="houseNumber" className="form-checkout-address">
            Número da casa
            <br />
            <input
              data-testid="checkout-house-number-input"
              id="houseNumber"
              type="houseNumber"
              name="houseNumber"
              className="label-login"
              onChange={ (event) => setHouseNumber(event.target.value) }
            />
          </label>
          {saleFinished ? (
            <h3 className="feedback">Compra realizada com sucesso!</h3>
          ) : (
            ''
          )}
        </form>
        <button
          className="btn-finish"
          data-testid="checkout-finish-btn"
          type="button"
          disabled={ !priceTotalReduced || street === '' || houseNumber === '' }
          onClick={ redirectToProduct }
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
};

export default CheckoutBody;
