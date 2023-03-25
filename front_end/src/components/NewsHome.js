import React from 'react';
import '../styles/NewsScreen.css';

export default function NewsHome() {
  return (
    <main className="news-home-image-container">
      <div className="black-overlay1"></div>
      <section className="news-home-details-container">
        <h1>
          Let's get updated with <span className="important">latest news</span>{' '}
        </h1>
      </section>
    </main>
  );
}
