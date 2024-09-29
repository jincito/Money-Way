import React, { useState } from "react";

const Unit = ({ unitTitle, description, detailedDescription }) => {
  const [isExpanded, setIsExpanded] = useState(false); // For unit description expansion

  const toggleExpand = () => {
    setIsExpanded(!isExpanded); // Toggle between expanded and collapsed states
  };

  return (
    <div style={{ marginBottom: "5px" }}>
      <h3
        onClick={toggleExpand}
        style={{
          cursor: "pointer",
          color: "#ffffff",
          fontSize: "1.2rem", // Change the font size here
        }}
      >
        {unitTitle} {isExpanded ? "▲" : "▼"}
      </h3>
      {isExpanded && (
        <div style={{ paddingLeft: "10px", color: "#cccccc" }}>
          <p>{description}</p> {/* Show description when expanded */}
          <p>{detailedDescription}</p> {/* Show detailed description */}
        </div>
      )}
    </div>
  );
};

export default Unit;
