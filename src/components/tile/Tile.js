import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
       {Object.values(description).map((value, index) => (
        <p key={index} className="tile">
           {typeof value === "object" ? Object.values(value).join(", ") : value}

        </p>
      ))}
    </div>
  );
};
