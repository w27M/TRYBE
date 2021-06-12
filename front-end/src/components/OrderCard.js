import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const moment = require('moment');

const OrderCard = ({ id, saleDate, totalPrice, position }) => (
  <div className="container-card">
    <Link to={ `orders/${id}` }>
      <div className="header-card">
        <div data-testid={ `${position}-order-number` }>
          {`Pedido ${id}`}
        </div>
        <div data-testid={ `${position}-order-date` }>
          {moment.utc(saleDate).format('DD/MM')}
        </div>
      </div>
      <div className="body-card" data-testid={ `${position}-order-total-value` }>

        {`R$ ${totalPrice.replace('.', ',')}`}
      </div>
    </Link>
  </div>

);

OrderCard.propTypes = {
  id: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
};

export default OrderCard;
