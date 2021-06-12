import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Global from './index';

const Provider = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isOk, setIsOk] = useState(true);
  const [user, setUser] = useState({});
  const [menuState, setMenuState] = useState(false);

  const actionMenu = () => {
    setMenuState(true);
  };

  const contexto = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    isChecked,
    setIsChecked,
    isOk,
    setIsOk,
    user,
    setUser,
    actionMenu,
    menuState,
    setMenuState,
  };

  const { children } = props;

  return (
    <Global.Provider value={ contexto }>
      {children}
    </Global.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
