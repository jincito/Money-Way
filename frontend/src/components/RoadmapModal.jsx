import React, { useEffect } from "react";
import Topic from "../pages/Topic";

const topics = [
  {
    topicTitle: "Taxes",
    units: [
      { unitTitle: "Understanding Taxes", description: "Learn about taxes." },
      { unitTitle: "Tax Filing", description: "How to file taxes." },
      {
        unitTitle: "Common Tax Deductions",
        description: "Key deductions to know.",
      },
    ],
  },
  {
    topicTitle: "Credit",
    units: [
      { unitTitle: "Credit Scores", description: "What is a credit score?" },
      {
        unitTitle: "Improving Your Credit",
        description: "Steps to improve credit.",
      },
      {
        unitTitle: "Using Credit Wisely",
        description: "How to use credit effectively.",
      },
    ],
  },
  {
    topicTitle: "Credit",
    units: [
      { unitTitle: "Credit Scores", description: "What is a credit score?" },
      {
        unitTitle: "Improving Your Credit",
        description: "Steps to improve credit.",
      },
      {
        unitTitle: "Using Credit Wisely",
        description: "How to use credit effectively.",
      },
    ],
  },
  {
    topicTitle: "Credit",
    units: [
      { unitTitle: "Credit Scores", description: "What is a credit score?" },
      {
        unitTitle: "Improving Your Credit",
        description: "Steps to improve credit.",
      },
      {
        unitTitle: "Using Credit Wisely",
        description: "How to use credit effectively.",
      },
    ],
  },
];

const RoadmapModal = ({ show, handleClose }) => {

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  // If the modal shouldn't be shown, return null
  if (!show) return null;

  const modalBackdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    fontSize: "1.5rem",
  };

  const modalContentStyle = {
    backgroundColor: "#000022",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "900px",
    width: "80%",
    maxHeight: "80vh",
    overflowY: "auto", // Enable scroll within the modal
    fontSize: "1.5rem",

  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "1.5rem",
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <div style={modalBackdropStyle} onClick={handleClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button style={closeButtonStyle} onClick={handleClose}>
          &times;
        </button>
        <h1 style={{ fontSize: "2.5rem" }}>Financial Literacy Roadmaps</h1>
        <div>
          {topics.map((topic, index) => (
            <Topic
              key={index}
              topicTitle={topic.topicTitle}
              units={topic.units}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapModal;
