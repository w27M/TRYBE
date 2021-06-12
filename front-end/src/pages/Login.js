import React from 'react';
import ComponentLogin from '../components/Login';
import AsideLogo from '../components/AsideLogo';
import Footer from '../components/Footer';
import '../css/login.css';

const Login = () => (
  <div className="container-out-login">
    <div className="container-form-int">
      <ComponentLogin />
      <AsideLogo />
    </div>
    <Footer />
  </div>
);

export default Login;
