import React, { useState } from 'react';
import '../styles/MachineScreen.css';

export default function Comment({ comments }) {
  const [isShowMore, setIsShowMore] = useState(false);
  const [isLiked, setIsLiked] = useState([0]);
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
          {comments.map((comment, index) => (
            <div className="machine-recent-comment-details" key={index}>
              <div className="machine-recent-comment-details-header">
                <div className="machine-recent-comment-details-image">
                  <img
                    src={require('../assets/user_avatar_logo.png')}
                    alt="user"
                  />
                </div>
                <div className="machine-recent-comment-name-details">
                  <h1>{comment.name}</h1>
                  <span>
                    <i className="fa-solid fa-calendar-days"></i> {comment.date}{' '}
                    | <i className="fa-solid fa-clock"></i> {comment.time}
                  </span>
                </div>
              </div>
              <div className="machine-recent-comment-details-content">
                <p>{comment.text}</p>
              </div>
              <div className="machine-comment-like-container">
                <i
                  onClick={() => {
                    if (isLiked.includes(index + 1)) {
                      isLiked.pop(index + 1);
                      setIsLiked(isLiked);
                    } else {
                      isLiked.push(index + 1);
                      setIsLiked(isLiked);
                    }
                  }}
                  className={
                    isLiked.includes(index + 1)
                      ? 'fa-solid fa-thumbs-up fa-bounce machine-comment-liked'
                      : 'fa-solid fa-thumbs-up fa-bounce'
                  }
                ></i>
                {'  '}
                {comment.likes} {comment.likes === 1 ? 'Like' : 'Likes'}
              </div>
            </div>
          ))}
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
