import React from 'react';

const Modal = ({ show, handleClose, children }) => {
  if (!show) {
    return null; // Don't render the modal if `show` is false
  }

  // Inline styles for modal components
  const styles = {
    modalBackdrop: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000, // Ensure the modal appears on top of other content
    },
    modalContent: {
      backgroundColor: 'orange',
      padding: '20px',
      borderRadius: '10px',
      maxWidth: '500px',
      width: '100%',
      position: 'relative',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      fontSize: '20px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.modalBackdrop}>
      <div style={styles.modalContent}>
        <button style={styles.closeButton} onClick={handleClose}>
          &times; {/* Close button */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
