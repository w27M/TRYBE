import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import api from '../services/api';
import numbers from '../helpers/Numbers';
import Card from './Card';

const ComponentBeers = () => {
  const history = useHistory();
  const token = localStorage.getItem('token');

  const [isLoading, setIsLoading] = useState(false);
  const [priceTotal, setPriceTotal] = useState(
    JSON.parse(localStorage.getItem('cart')) || [],
  );
  const [Beers, setBeers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getBeers = async () => {
      const { data } = await api.get('/products');
      setBeers(data);
      setIsLoading(false);
    };
    getBeers();
  }, [history]);

  const priceTotalReduced = priceTotal.reduce(
    (curr, next) => curr + next.total,
    numbers.ZERO_REAL,
  );

  const redirectToCheckout = () => {
    history.push('/checkout');
  };

  return (
    <div className="product-list-container">
      {!token && <Redirect to="/login" />}
      {isLoading ? (
        <span>Carregando ...</span>
      ) : (
        <div className="container-int-cards">
          {
            Beers.map((beer, index) => (
              <Card
                key={ beer.id }
                beer={ beer }
                index={ index }
                setCart={ setPriceTotal }
                cart={ priceTotal }
              />
            ))
          }
        </div>
      )}
      <div className="status-cart">
        <div>
          Valor total do carrinho
          <p data-testid="checkout-bottom-btn-value">
            {`R$ ${priceTotalReduced.toFixed(2).replace('.', ',')}`}
          </p>
        </div>
        <button
          data-testid="checkout-bottom-btn"
          type="button"
          className="btn-checkout"
          disabled={ !priceTotalReduced }
          onClick={ redirectToCheckout }
        >
          Ver Carrinho
        </button>

      </div>
    </div>
  );
};

export default ComponentBeers;
