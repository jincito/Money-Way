import React, { useEffect } from "react";
import Topic from "../pages/Topic";

const topics = [
  {
    topicTitle: "Taxes",
    units: [
      {
        unitTitle: "Understanding Taxes",
        description:
          "Taxes are amounts of money collected by the government from individuals and businesses to fund public services and programs.",
        detailedDescription:
          "These services include things like schools, roads, infrastructure, and public safety. In the United States, taxes are collected at the federal, state, and local levels.",
      },
      {
        unitTitle: "Tax Filing",
        description:
          "Everyone in the US is required to report their earnings and pay taxes.",
        detailedDescription:
          "This includes income from jobs, side gigs, investments, etc. Failing to report all income could result in penalties.",
      },
      {
        unitTitle: "Common Tax Deductions",
        description: "You can file your taxes online using various platforms.",
        detailedDescription:
          "These platforms can help you file accurately, often for free or a small fee, saving you time and hassle.",
      },
    ],
  },
  {
    topicTitle: "Credit",
    units: [
      {
        unitTitle: "Credit Scores",
        description: "Credit is essentially your reputation as a borrower.",
        detailedDescription:
          "Your credit score represents how likely you are to repay debts on time and is used by lenders to determine credit approval.",
      },
      {
        unitTitle: "Improving Your Credit",
        description:
          "Building credit can be challenging without a credit history.",
        detailedDescription:
          "Options like secured credit cards or becoming an authorized user on someone else's account can help you build credit.",
      },
      {
        unitTitle: "Using Credit Wisely",
        description:
          "Closing old credit card accounts can hurt your credit score.",
        detailedDescription:
          "It's advisable to keep old accounts open to maintain a healthy credit history.",
      },
    ],
  },
  {
    topicTitle: "Budgeting",
    units: [
      {
        unitTitle: "Understanding Budgeting",
        description: "Budgeting is creating a plan for spending money.",
        detailedDescription:
          "It involves tracking income, expenses, and savings to live within your means and reach financial goals.",
      },
      {
        unitTitle: "Reviewing Your Budget",
        description: "Set aside part of your budget for personal spending.",
        detailedDescription:
          "It's crucial to review and update your budget regularly to stay on track with changes in income or expenses.",
      },
      {
        unitTitle: "Avoiding Financial Pitfalls",
        description:
          "Spending more than you earn can lead to financial problems.",
        detailedDescription:
          "Prioritize essentials before allocating money for discretionary expenses.",
      },
    ],
  },
  {
    topicTitle: "Savings",
    units: [
      {
        unitTitle: "Understanding Savings",
        description: "Saving money means setting aside income for future use.",
        detailedDescription:
          "It's critical for financial planning and provides a safety net for unexpected expenses.",
      },
      {
        unitTitle: "Building an Emergency Fund",
        description:
          "Having three to six months of living expenses saved is recommended.",
        detailedDescription:
          "Everyone should prioritize saving for the future, regardless of income level.",
      },
      {
        unitTitle: "Automating Savings",
        description: "Set aside savings before spending on other expenses.",
        detailedDescription:
          "Automate savings with transfers to ensure consistent savings growth.",
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
        <h1
          style={{
            fontFamily: "Orbitron",
            fontSize: "4rem",
            color: "#0CEAD9",
            textShadow:
              "0 0 10px rgba(255, 140, 0, 0.7), 0 0 20px rgba(0, 0, 128, 0.5), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 40px rgba(0, 0, 128, 0.3), 0 0 50px rgba(0, 0, 128, 0.2)",
            position: "relative",
            bottom: "50px",
            left: "10px",
            zIndex: 10,
          }}
        >
          Financial Literacy Roadmaps
        </h1>

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
