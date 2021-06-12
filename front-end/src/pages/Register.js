import React from 'react';
import ComponentRegister from '../components/Register';
import Footer from '../components/Footer';
import AsideLogo from '../components/AsideLogo';
import '../css/login.css';
import '../css/registration.css';

const Register = () => (
  <div className="container-out-login">
    <div className="container-form-int">
      <ComponentRegister />
      <AsideLogo />
    </div>
    <Footer />
  </div>
);

export default Register;
