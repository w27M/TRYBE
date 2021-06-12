import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { FormControl, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import fieldValidate from '../helpers/fieldValidate';
import context from '../context';
import api from '../services/api';

const ComponentRegister = () => {
  const { name, setName, email, setEmail } = useContext(context);
  const { password, setPassword } = useContext(context);
  const { isOk, setIsOk, user, setUser } = useContext(context);
  const { isChecked, setIsChecked } = useContext(context);
  const [logged, setLogged] = useState(false);

  const isValid = fieldValidate(name, email, password);
  const REACT_APP_URL = 'http://localhost:3001';

  useEffect(() => {
    setName('');
    setEmail('');
    setPassword('');
    setIsChecked(false);
  }, [setEmail, setIsChecked, setName, setPassword]);

  useEffect(() => {
    if (!isValid) {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  }, [isValid, setIsOk]);

  const handleSubmit = async (e) => {
    const payload = {
      name,
      email,
      password,
      checked: isChecked,
    };

    const params = { email, password };

    if (!isValid) {
      console.log('Dados inválidos.'); // não remover, ainda não sei o que por aqui
    } else {
      e.preventDefault();
      const registraingResult = await fetch(`${REACT_APP_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ ...payload }),
      });
      const registraingData = await registraingResult.json();
      await setUser(registraingData);
      api
        .post('/login', params)
        .then((dataUser) => {
          localStorage.setItem('token', dataUser.data.token);
          setLogged(true);
        })
        .catch((err) => console.log(`Error in login process: ${err}`));
    }
  };

  const handChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <FormControl className="form-registration">
      {logged && user.role === 'administrator' && <Redirect to="/admin/orders" />}
      {logged && user.role === 'client' && <Redirect to="/products" />}
      <h1>Cadastro</h1>
      <TextField
        id="userName"
        data-testid="signup-name"
        label="Nome"
        type="text"
        className="registration-input"
        variant="outlined"
        placeholder="Monteiro Lobato"
        onChange={ (event) => setName(event.target.value) }
      />

      <TextField
        id="email"
        data-testid="signup-email"
        label="Email"
        type="text"
        className="registration-input"
        variant="outlined"
        placeholder="lobato@lobato.com"
        onChange={ (event) => setEmail(event.target.value) }
      />

      <TextField
        id="password"
        data-testid="signup-password"
        label="Senha"
        type="password"
        className="registration-input"
        variant="outlined"
        onChange={ (event) => setPassword(event.target.value) }
      />

      <div className="checkDecision">
        <input
          type="checkbox"
          data-testid="signup-seller"
          className="registerCheck"
          size="medium"
          checked={ isChecked }
          onChange={ handChange }
        />
        <span>Quero vender</span>
      </div>
      <hr />
      <div className="register-btn-group">
        <Button
          data-testid="signup-btn"
          color="primary"
          variant="contained"
          className="RegisterBtn"
          disabled={ isOk }
          onClick={ handleSubmit }
        >
          Cadastrar
        </Button>
      </div>
      <div className="success-message">
        {!user.status && <p>{user.messageFailed}</p>}
      </div>
    </FormControl>
  );
};

export default ComponentRegister;
