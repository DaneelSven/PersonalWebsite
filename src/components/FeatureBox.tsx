// components/FeatureBoxes.js
import React from "react";

const FeatureBoxes = () => {
  return (
    <div className="feature-boxes">
      {[
        { title: "Feature 1", description: "Feature 1 Description" },
        { title: "Feature 2", description: "Feature 2 Description" },
        // Add more features as needed
      ].map((feature, index) => (
        <div key={index} className="feature-box">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureBoxes;
