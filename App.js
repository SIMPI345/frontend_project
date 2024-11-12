// src/App.js
import React, { useState } from 'react';
import './App.css';
import { Modal } from 'react-bootstrap';
import AppHeader from './components/AppHeader';
import RegisterModal from './components/RegisterModal';
import LoginModal from './components/LoginModal';

const App = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleRegisterModalShow = () => setShowRegister(true);
  const handleRegisterModalClose = () => setShowRegister(false);

  const handleLoginModalShow = () => setShowLogin(true);
  const handleLoginModalClose = () => setShowLogin(false);

  return (
    <div className="App">
      <AppHeader
        showRegisterModal={handleRegisterModalShow}
        showLoginModal={handleLoginModalShow}
      />

      {/* Register Modal */}
      <RegisterModal show={showRegister} handleClose={handleRegisterModalClose} />

      {/* Login Modal */}
      <LoginModal show={showLogin} handleClose={handleLoginModalClose} />
    </div>
  );
}

export default App;
