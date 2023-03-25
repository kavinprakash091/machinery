import React, { useState } from 'react';
import '../styles/NewsScreen.css';

export default function LatestNews() {
  const [isShowMore, setIsShowMore] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [comment, setComment] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    alert(name + ' ' + email + ' ' + website + ' ' + comment);
  };

  return (
    <section className="latest-news-page">
      <div className="news-image-container">
        <img src={require('../assets/news_image1.png')} alt="news" />
      </div>
      <div className="news-details-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. U enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dol in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat. nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, s in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <br></br>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusant doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta s
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
        </p>
        <div className="blog-quotes-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. U enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commod consequat. Duis aute irure dol in reprehenderit
            in voluptate velit
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. U enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dol in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat.
        </p>
        <br></br>
        <p>
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, s in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusant
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta s
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
        </p>
      </div>
      <div className="comment-header">
        <div className="left-comment-header">
          <div>
            <i className="fa-solid fa-user"></i> By Company
          </div>
          <div>
            <i className="fa-solid fa-comment"></i> No Comment
          </div>
        </div>
        <div className="right-comment-header">
          <i className="fa-solid fa-clock"></i> 11,March,2023
        </div>
      </div>
      <div className="news-comment-form-container">
        <h1>Leave a Reply</h1>
        <form className="news-comment-form" onSubmit={submitHandler}>
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
          <input
            type="link"
            placeholder="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required
          />
          <textarea
            placeholder="Comment"
            rows="10"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button type="submit" className="news-post-comment-button">
            {' '}
            POST COMMENT <i className="fa-solid fa-paper-plane fa-bounce"></i>
          </button>
        </form>
      </div>
      <div className="news-recent-comment-container">
        <h1>Recent Comment</h1>
        <div
          className={
            isShowMore
              ? 'news-recent-comment-details-container big-news'
              : 'news-recent-comment-details-container'
          }
        >
          <div className="news-recent-comment-details">
            <div className="news-recent-comment-details-header">
              <div className="news-recent-comment-details-image"></div>
              <div className="news-recent-comment-name-details">
                <h1>Kavin Prakash</h1>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> 11.03.2002 |{' '}
                  <i className="fa-solid fa-clock"></i> 8.45 am
                </span>
              </div>
            </div>
            <div className="news-recent-comment-details-content">
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
          </div>
          <div className="news-recent-comment-details">
            <div className="news-recent-comment-details-header">
              <div className="news-recent-comment-details-image"></div>
              <div className="news-recent-comment-name-details">
                <h1>Kavin Prakash</h1>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> 11.03.2002 |{' '}
                  <i className="fa-solid fa-clock"></i> 8.45 am
                </span>
              </div>
            </div>
            <div className="news-recent-comment-details-content">
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
          </div>
          <div className="news-recent-comment-details">
            <div className="news-recent-comment-details-header">
              <div className="news-recent-comment-details-image"></div>
              <div className="news-recent-comment-name-details">
                <h1>Kavin Prakash</h1>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> 11.03.2002 |{' '}
                  <i className="fa-solid fa-clock"></i> 8.45 am
                </span>
              </div>
            </div>
            <div className="news-recent-comment-details-content">
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
          </div>
          <div className="news-recent-comment-details">
            <div className="news-recent-comment-details-header">
              <div className="news-recent-comment-details-image"></div>
              <div className="news-recent-comment-name-details">
                <h1>Kavin Prakash</h1>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> 11.03.2002 |{' '}
                  <i className="fa-solid fa-clock"></i> 8.45 am
                </span>
              </div>
            </div>
            <div className="news-recent-comment-details-content">
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
          </div>
          <div className="news-recent-comment-details">
            <div className="news-recent-comment-details-header">
              <div className="news-recent-comment-details-image"></div>
              <div className="news-recent-comment-name-details">
                <h1>Kavin Prakash</h1>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> 11.03.2002 |{' '}
                  <i className="fa-solid fa-clock"></i> 8.45 am
                </span>
              </div>
            </div>
            <div className="news-recent-comment-details-content">
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
          </div>
          <div className="news-recent-comment-details">
            <div className="news-recent-comment-details-header">
              <div className="news-recent-comment-details-image"></div>
              <div className="news-recent-comment-name-details">
                <h1>Kavin Prakash</h1>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> 11.03.2002 |{' '}
                  <i className="fa-solid fa-clock"></i> 8.45 am
                </span>
              </div>
            </div>
            <div className="news-recent-comment-details-content">
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
          </div>
          <div className="news-recent-comment-details">
            <div className="news-recent-comment-details-header">
              <div className="news-recent-comment-details-image"></div>
              <div className="news-recent-comment-name-details">
                <h1>Kavin Prakash</h1>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> 11.03.2002 |{' '}
                  <i className="fa-solid fa-clock"></i> 8.45 am
                </span>
              </div>
            </div>
            <div className="news-recent-comment-details-content">
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
          </div>
          <div className="news-recent-comment-details">
            <div className="news-recent-comment-details-header">
              <div className="news-recent-comment-details-image"></div>
              <div className="news-recent-comment-name-details">
                <h1>Kavin Prakash</h1>
                <span>
                  <i className="fa-solid fa-calendar-days"></i> 11.03.2002 |{' '}
                  <i className="fa-solid fa-clock"></i> 8.45 am
                </span>
              </div>
            </div>
            <div className="news-recent-comment-details-content">
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
          </div>
        </div>
        <button
          onClick={() => setIsShowMore(!isShowMore)}
          className="news-comment-show-more-button"
        >
          {isShowMore ? 'Show less' : 'Show more'}
        </button>
      </div>
    </section>
  );
}
