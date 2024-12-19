import React from "react";

function MenuCard({ name, image }) {
  return (
    <div className="menu-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default MenuCard;
