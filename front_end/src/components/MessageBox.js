import React from 'react';
import { Link } from 'react-router-dom';

export default function MessageBox({ message, url, color }) {
  return (
    <div className="message-box" style={{ backgroundColor: color }}>
      {message}
      {url && <Link to="/machines"> {url}</Link>}
    </div>
  );
}
