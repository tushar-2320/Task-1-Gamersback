import React from 'react';
import './button.css'; 

const Button = ({ label, color, size }) => {
  const buttonClasses = `button ${size} ${color}`;

  return (
    <button className={buttonClasses}>
      {label}
    </button>
  );
};

export default Button;
