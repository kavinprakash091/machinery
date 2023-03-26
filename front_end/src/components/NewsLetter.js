import React, { useState } from 'react';
import '../styles/HomeScreen.css';

export default function NewsLetter() {
  const [email, setEmail] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    alert(email);
  };
  return (
    <section className="news-letter">
      Subscribe to our Newsletter :
      <form className="news-letter-form" onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Enter your Email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="news-letter-subscribe-button">
          Subscribe <i className="fa-solid fa-bell fa-shake"></i>
        </button>
      </form>
    </section>
  );
}
