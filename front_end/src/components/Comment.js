import React, { useState } from 'react';
import '../styles/MachineScreen.css';

export default function Comment() {
  const [isShowMore, setIsShowMore] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    alert(name + ' ' + email + ' ' + comment);
  };
  return (
    <section className="machine-comment-container">
      <div className="machine-comment-header">
        <i class="fa-solid fa-comment fa-beat-fade"></i> Comment section
      </div>
      <div className="machine-comment-form-container">
        <h1>Leave a Reply</h1>
        <form className="machine-comment-form" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Comment your message"
            rows="10"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button type="submit" className="machine-post-comment-button">
            {' '}
            POST COMMENT <i className="fa-solid fa-paper-plane fa-bounce"></i>
          </button>
        </form>
      </div>
      <div className="machine-recent-comment-container">
        <h1>Recent Comment</h1>
        <div
          className={
            isShowMore
              ? 'machine-recent-comment-details-container big-machine-comment'
              : 'machine-recent-comment-details-container'
          }
        >
          <div className="machine-recent-comment-details">
            <div className="machine-recent-comment-details-header">
              <div className="machine-recent-comment-details-image"></div>
              <div className="machine-recent-comment-name-details">
                <h1>Kavin Prakash</h1>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> 11.03.2002 |{' '}
                  <i className="fa-solid fa-clock"></i> 8.45 am
                </span>
              </div>
            </div>
            <div className="machine-recent-comment-details-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. U
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dol in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                s in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="machine-comment-like-container">
              <i class="fa-solid fa-thumbs-up fa-bounce"></i> 10 Likes
            </div>
          </div>
          <div className="machine-recent-comment-details">
            <div className="machine-recent-comment-details-header">
              <div className="machine-recent-comment-details-image"></div>
              <div className="machine-recent-comment-name-details">
                <h1>Kavin Prakash</h1>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> 11.03.2002 |{' '}
                  <i className="fa-solid fa-clock"></i> 8.45 am
                </span>
              </div>
            </div>
            <div className="machine-recent-comment-details-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. U
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dol in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                s in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="machine-comment-like-container">
              <i class="fa-solid fa-thumbs-up fa-bounce"></i> 10 Likes
            </div>
          </div>
          <div className="machine-recent-comment-details">
            <div className="machine-recent-comment-details-header">
              <div className="machine-recent-comment-details-image"></div>
              <div className="machine-recent-comment-name-details">
                <h1>Kavin Prakash</h1>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> 11.03.2002 |{' '}
                  <i className="fa-solid fa-clock"></i> 8.45 am
                </span>
              </div>
            </div>
            <div className="machine-recent-comment-details-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. U
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dol in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                s in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="machine-comment-like-container">
              <i class="fa-solid fa-thumbs-up fa-bounce"></i> 10 Likes
            </div>
          </div>
          <div className="machine-recent-comment-details">
            <div className="machine-recent-comment-details-header">
              <div className="machine-recent-comment-details-image"></div>
              <div className="machine-recent-comment-name-details">
                <h1>Kavin Prakash</h1>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> 11.03.2002 |{' '}
                  <i className="fa-solid fa-clock"></i> 8.45 am
                </span>
              </div>
            </div>
            <div className="machine-recent-comment-details-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. U
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dol in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                s in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="machine-comment-like-container">
              <i class="fa-solid fa-thumbs-up fa-bounce"></i> 10 Likes
            </div>
          </div>
          <div className="machine-recent-comment-details">
            <div className="machine-recent-comment-details-header">
              <div className="machine-recent-comment-details-image"></div>
              <div className="machine-recent-comment-name-details">
                <h1>Kavin Prakash</h1>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> 11.03.2002 |{' '}
                  <i className="fa-solid fa-clock"></i> 8.45 am
                </span>
              </div>
            </div>
            <div className="machine-recent-comment-details-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. U
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dol in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                s in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="machine-comment-like-container">
              <i class="fa-solid fa-thumbs-up fa-bounce"></i> 10 Likes
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsShowMore(!isShowMore)}
          className="show-more-button"
        >
          {isShowMore ? 'Show less' : 'Show more'}
        </button>
      </div>
    </section>
  );
}
