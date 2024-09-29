import React, { useState } from "react";
import Unit from "../pages/Unit.jsx";

const Topic = ({ topicTitle, units }) => {
  const [isExpanded, setIsExpanded] = useState(false); // For topic expansion state

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ marginBottom: '10px', borderBottom: '1px solid #fff' }}>
      <h2 
        onClick={toggleExpand} 
        style={{
          cursor: 'pointer', 
          color: '#ff6600', 
          margin: '0 0 10px 0',
          fontSize: '1.5rem', // Change the font size here
        }}
      >
        {topicTitle} {isExpanded ? '▲' : '▼'}
      </h2>
      {isExpanded && (
        <div style={{ paddingLeft: '10px' }}>
          {units.map((unit, index) => (
            <Unit 
              key={index} 
              unitTitle={unit.unitTitle} 
              description={unit.description} 
              detailedDescription={unit.detailedDescription} // Pass the new prop
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Topic;
