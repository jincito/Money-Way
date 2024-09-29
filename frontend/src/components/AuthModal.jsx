import React, { useState } from 'react';
import Login from './Login';
import CreateAccount from './CreateAccount';

const AuthModal = ({ closeModal }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleModal = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        {isLogin ? (
          <Login closeModal={closeModal} />
        ) : (
          <CreateAccount closeModal={closeModal} />
        )}
        <button type="button" onClick={toggleModal}>
          {isLogin ? 'Create Account' : 'Back to Login'}
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
