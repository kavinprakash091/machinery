import React from 'react';
import '../styles/ProfileScreen.css';

export default function () {
  return (
    <section className="profile-page">
      <div className="top-margin-signin"></div>
      <div className="user-profile-container">
        <div className="user-profile-header">
          <h1>
            <i className="fa-solid fa-user fa-flip"></i> User Information
          </h1>
        </div>
      </div>
    </section>
  );
}
