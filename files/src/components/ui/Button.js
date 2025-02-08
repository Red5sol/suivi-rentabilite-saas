import React from 'react';

const Button = ({ onClick, children, variant = 'default' }) => (
  <button className={`btn ${variant}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;