import React, { useState } from "react";

const Unit = ({ unitTitle, description }) => {
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
        <p style={{ paddingLeft: "10px", color: "#cccccc" }}>{description}</p> // Show description when expanded
      )}
    </div>
  );
};

export default Unit;
