import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import api from '../services/api';

const regexEmail = /\S+@\S+\.\S+/;
const passwordMinLength = 6;

const ComponentLogin = () => {
  const [labelLogin, setLabelLogin] = useState(true);
  const [emailLabel, setEmailLabel] = useState('');
  const [passwordLabel, setPasswordLabel] = useState('');
  const [data, setData] = useState({});

  const inputValidation = (password) => {
    setPasswordLabel(password);
    const result = regexEmail.test(emailLabel) && password.length >= passwordMinLength;
    setLabelLogin(!result);
  };

  const params = { email: emailLabel, password: passwordLabel };

  const toLogin = async (event) => {
    event.preventDefault();
    return api
      .post('/login', params)
      .then((dataUser) => {
        localStorage.setItem('token', dataUser.data.token);
        localStorage.setItem(
          'data',
          JSON.stringify({
            id: dataUser.data.data.id,
            name: dataUser.data.data.name,
            email: dataUser.data.data.email,
          }),
        );
        setData(dataUser.data.data);
      })
      .catch((err) => console.log(`Error in login process: ${err}`));
  };

  return (
    <div className="container-login">
      {data.role === 'administrator' && <Redirect to="/admin/orders" />}
      {data.role === 'client' && <Redirect to="/products" />}
      <div>
        <h3 className="form-login-title">Login</h3>
      </div>
      <div>
        <form className="container-int-login">
          <label htmlFor="email" className="form-login">
            Email
            <input
              data-testid="email-input"
              id="email"
              type="email"
              name="email"
              className="label-login"
              onChange={ (event) => setEmailLabel(event.target.value) }
            />
          </label>

          <label htmlFor="password" className="form-login">
            Senha
            <input
              data-testid="password-input"
              id="password"
              type="password"
              name="password"
              className="label-login"
              onChange={ (event) => inputValidation(event.target.value) }
            />
          </label>

          <button
            type="button"
            disabled={ labelLogin }
            className={ labelLogin === false ? 'btn-submit-login' : 'disable' }
            data-testid="signin-btn"
            onClick={ toLogin }
          >
            Entrar
          </button>
        </form>
      </div>
      <button
        type="button"
        data-testid="no-account-btn"
        className="btn-submit-login remove-link"
      >
        <Link to="/register">Ainda não tenho conta</Link>
      </button>
      <div className="container-link">
        <div className="link-login">Terms of use</div>
        <div className="link-login">Privacy Police</div>
      </div>
    </div>
  );
};

export default ComponentLogin;
