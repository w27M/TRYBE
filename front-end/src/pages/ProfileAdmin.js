import React from 'react';
import ProfileAdmin from '../components/ProfileAdmin';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/adminProfile.css';

const AdminProfile = () => (
  <div>
    <Header title="Admin - Perfil" />
    <div>
      <ProfileAdmin />
    </div>
    <Footer />
  </div>
);

export default AdminProfile;
