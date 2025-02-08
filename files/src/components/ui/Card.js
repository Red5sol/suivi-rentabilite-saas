import React from 'react';

const Card = ({ children, className = '' }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="card-content">
    {children}
  </div>
);

export default Card;