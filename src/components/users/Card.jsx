import React from 'react';
import './Card.css';

const Card = ({ product }) => {
  return (
    <div className="card">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default Card;