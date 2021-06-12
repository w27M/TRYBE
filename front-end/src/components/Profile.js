import React, { useContext, useEffect, useState } from 'react';
import { FormControl, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import context from '../context';
import api from '../services/api';

const ComponentProfile = () => {
  const { setName } = useContext(context);
  const [modified, setModified] = useState(false);
  const [localName, setLocalName] = useState('name');
  const [actualName, setActualName] = useState('actName');
  const [localEmail, setLocalEmail] = useState('email');
  const REACT_APP_URL = 'http://localhost:3001';

  const handleSubmit = async (e) => {
    setModified(true);
    const OK = 200;
    e.preventDefault();
    const objSend = {
      name: localName,
      old: actualName,
    };

    api.put(`${REACT_APP_URL}/user`, objSend)
      .then((res) => {
        if (res.status === OK) {
          setActualName(localName);
          setName(localName);
          const tempStorage = JSON.parse(localStorage.getItem('data'));
          tempStorage.name = localName;
          localStorage.setItem(JSON.stringify(tempStorage));
        }
      });
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    setLocalName(data.name);
    setActualName(data.name);
    setLocalEmail(data.email);
  }, []);

  return (
    <FormControl className="formRegistration form-input">
      <h1 data-testid="top-title">Cliente - Meu Perfil</h1>
      <input
        id="userName"
        data-testid="profile-name-input"
        type="text"
        value={ localName }
        className="registration-input"
        placeholder="Monteiro Lobato"
        onChange={ (event) => setLocalName(event.target.value) }
      />

      <TextField
        id="email"
        data-testid="profile-email-input"
        label="Email"
        className="signup-email"
        value={ localEmail }
        variant="outlined"
        readOnly
      />

      <hr />
      <div className="register-btn-group">
        <Button
          data-testid="profile-save-btn"
          color="primary"
          variant="contained"
          className="RegisterBtn"
          disabled={ actualName === localName }
          onClick={ (e) => handleSubmit(e) }
        >
          Salvar
        </Button>
      </div>
      { modified && <p>Atualização concluída com sucesso</p> }
    </FormControl>
  );
};

export default ComponentProfile;
