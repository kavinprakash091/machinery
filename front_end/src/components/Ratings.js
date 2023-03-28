import React from 'react';
import '../styles/MachineScreen.css';

export default function Ratings({ ratings, numReviews }) {
  return (
    <section className="review-container">
      <div className="star-container">
        <i
          className={
            ratings >= 1
              ? 'fa-solid fa-star fa-beat'
              : ratings >= 0.5
              ? 'fa-solid fa-star-half-stroke fa-beat'
              : 'fa-regular fa-star fa-beat'
          }
        ></i>
        <i
          className={
            ratings >= 2
              ? 'fa-solid fa-star fa-beat'
              : ratings >= 1.5
              ? 'fa-solid fa-star-half-stroke fa-beat'
              : 'fa-regular fa-star fa-beat'
          }
        ></i>
        <i
          className={
            ratings >= 3
              ? 'fa-solid fa-star fa-beat'
              : ratings >= 2.5
              ? 'fa-solid fa-star-half-stroke fa-beat'
              : 'fa-regular fa-star fa-beat'
          }
        ></i>
        <i
          className={
            ratings >= 4
              ? 'fa-solid fa-star fa-beat'
              : ratings >= 3.5
              ? 'fa-solid fa-star-half-stroke fa-beat'
              : 'fa-regular fa-star fa-beat'
          }
        ></i>
        <i
          className={
            ratings >= 5
              ? 'fa-solid fa-star fa-beat'
              : ratings >= 4.5
              ? 'fa-solid fa-star-half-stroke fa-beat'
              : 'fa-regular fa-star fa-beat'
          }
        ></i>
      </div>
      <p>
        {numReviews} {numReviews === 1 ? 'review' : 'reviews'}
      </p>
    </section>
  );
}
