import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MessageBox({ message, url, color, close }) {
  const [isClose, setIsClose] = useState(close);
  console.log(isClose + ' ' + close);

  return (
    <div
      className={isClose ? 'close-message-box' : 'message-box'}
      style={{ backgroundColor: color }}
    >
      <div className="content-container">
        {message} {url && <Link to="/machines"> {url} </Link>}
      </div>
      {color === '#ff8282' && (
        <div className="close-container" onClick={() => setIsClose(true)}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      )}
    </div>
  );
}
