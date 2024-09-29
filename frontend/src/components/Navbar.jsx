import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Login from './Login'; // Import the Login component
import CreateAccount from './CreateAccount'; // Import the CreateAccount component

const Navbar = ({ handleRoadmapClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isNotRootPage = location.pathname !== '/';
  const [showModal, setShowModal] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false); // State to toggle between Login and Create Account

  const toggleLogin = () => setShowModal(!showModal);
  const closeModal = () => {
    setShowModal(false);
    setIsCreatingAccount(false); // Reset to Login when modal is closed
  };

  const handleCreateAccountClick = () => {
    setIsCreatingAccount(true); // Show CreateAccount when "Create Account" is clicked
  };

  return (
    <header className="navbar">
      <button onClick={handleRoadmapClick}>Roadmap</button>
      <div>
        <button onClick={toggleLogin}>Login</button>
        {showModal && (
          <div className="modal"> {/* Modal container */}
            <div className="modal-content"> {/* Content wrapper for styling */}
              {isCreatingAccount ? (
                <CreateAccount closeModal={closeModal} />
              ) : (
                <>
                  <Login closeModal={closeModal} />
                  <button type="button" onClick={handleCreateAccountClick}>
                    Create Account
                  </button> {/* This button is now inside the modal-content */}
                </>
              )}
              <button type="button" onClick={closeModal}>Cancel</button> {/* Main Cancel button */}
            </div>
          </div>
        )}
      </div>
      {isNotRootPage && (
        <button onClick={() => navigate('/')} className="home-button">
          Go to Home
        </button>
      )}
    </header>
  );
};

export default Navbar;
