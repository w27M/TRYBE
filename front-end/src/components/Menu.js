import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Global from '../context/index';
import '../css/menu.css';

const Menu = () => {
  const history = useHistory();
  let althernativeClassName;
  const {
    location: { pathname },
  } = history;
  const ADMIN_ROUTE = '/admin/orders';

  const { menuState, setMenuState } = useContext(Global);

  useEffect(() => {
    if (pathname === ADMIN_ROUTE) {
      setMenuState(true);
    }
  }, [ADMIN_ROUTE, pathname, setMenuState]);

  if (pathname === ADMIN_ROUTE) {
    althernativeClassName = 'admin-side-bar-container';
  } else {
    althernativeClassName = 'side-menu-container';
  }

  return (
    <div
      className={
        menuState
          ? `${althernativeClassName} aside-menu-show`
          : `${althernativeClassName} aside-menu-hide`
      }
    >
      {pathname !== ADMIN_ROUTE ? (
        <div className={ menuState ? 'item-menu' : 'hide-menu' }>
          <Link to="/products" data-testid="side-menu-item-products">
            Produtos
          </Link>
        </div>
      ) : null}
      <div className={ menuState ? 'item-menu' : 'hide-menu' }>
        {pathname !== ADMIN_ROUTE ? (
          <Link to="/orders" data-testid="side-menu-item-my-orders">
            Meus pedidos
          </Link>
        ) : (
          <Link to="/admin/orders" data-testid="side-menu-item-orders">
            Meus pedidos
          </Link>
        )}
      </div>
      <div className={ menuState ? 'item-menu' : 'hide-menu' }>
        {pathname !== ADMIN_ROUTE ? (
          <Link to="/profile" data-testid="side-menu-item-my-profile">
            Meu perfil
          </Link>
        ) : (
          <Link to="/admin/profile" data-testid="side-menu-item-profile">
            Meu perfil
          </Link>
        )}
      </div>
      <div className={ menuState ? 'item-menu' : 'hide-menu' }>
        <Link to="/login" data-testid="side-menu-item-logout">
          Sair
        </Link>
      </div>
    </div>
  );
};

export default Menu;
