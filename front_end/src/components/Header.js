import React from 'react';
import '../styles/HomeScreen.css';

export default function Header({ heading1, heading2 }) {
  return (
    <div className="div-header-container">
      <h1>
        {heading1} <span className="important"> {heading2} </span>{' '}
      </h1>
    </div>
  );
}
