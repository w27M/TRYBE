import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import api from '../services/api';

const moment = require('moment');

function OrderDetailsClient() {
  const [order, setOrder] = useState([]);
  const [sale, setSale] = useState({});
  const { id } = useParams();

  const requestProductsByOrderId = () => {
    api.get(`/orders/${id}`)
      .then((response) => setOrder(response.data))
      .catch((error) => console.log('error: ', error));
  };

  const requestOrderById = () => {
    api.get(`/sales/${id}`)
      .then((response) => setSale(response.data))
      .catch((error) => console.log('error: ', error));
  };

  useEffect(() => {
    requestProductsByOrderId();
    requestOrderById();
  }, []);

  const loggedUser = JSON.parse(localStorage.getItem('data')) || { id: null };

  return (
    <div>
      { loggedUser.id === null && <Redirect to="/login" /> }
      {sale ? (
        <div>
          <h1 data-testid="top-title">{ `Detalhes de Pedido ${id}` }</h1>
          <h2 data-testid="order-number">{ `Pedido ${id}` }</h2>
          <p data-testid="order-date">
            { moment.utc(sale.sale_date).format('DD/MM')}
          </p>
          <p data-testid="order-total-value">
            { `R$ ${sale.total_price && sale.total_price.replace('.', ',')}` }
          </p>
          {order && order.map(({ quantity, name, price }, index) => {
            const totalPrice = `${(quantity * price).toFixed(2)}`;
            return (
              <div key={ index }>
                <p data-testid={ `${index}-product-name` }>{ name }</p>
                <p data-testid={ `${index}-product-qtd` }>{ quantity }</p>
                <p data-testid={ `${index}-product-total-value` }>
                  { `R$ ${totalPrice.replace('.', ',')}` }
                </p>
              </div>
            );
          })}
        </div>
      ) : (<div>Loading...</div>)}
    </div>
  );
}

export default OrderDetailsClient;
