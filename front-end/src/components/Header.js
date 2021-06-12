import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { useHistory } from 'react-router-dom';
import Menu from '../image/icon-menu.svg';
import Global from '../context/index';

function Header({ title }) {
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  const CurrentDate = format(new Date(), 'EEEEEE, d, MMMM', { locale: ptBR });
  const { setMenuState, menuState } = useContext(Global);
  return (
    <header className="headerContainer">
      {pathname !== '/admin/profile' ? (
        <div className="container-menu">
          <button
            type="button"
            onClick={ () => setMenuState(!menuState) }
            className="btn-menu"
            data-testid="top-hamburguer"
          >
            <img src={ Menu } width="30%" alt="Podcastr" />
          </button>
        </div>
      ) : null}

      <p className="header-message" data-testid="top-title">
        {title}
      </p>

      <span className="date-time">{CurrentDate}</span>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
