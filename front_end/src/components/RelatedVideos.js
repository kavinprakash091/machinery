import React, { useState } from 'react';
import '../styles/MachineScreen.css';

export default function RelatedVideos({ relatedVideos }) {
  const [videoShowMore, setVideoShowMore] = useState(false);
  return (
    <section>
      <div className="machine-related-video-container">
        <h2>
          <i className="fa-solid fa-video fa-shake"></i> Related Videos
        </h2>
        <div
          className={
            videoShowMore
              ? 'machine-related-videos-container big-machine-related-video'
              : 'machine-related-videos-container'
          }
        >
          {relatedVideos.map((video, index) => (
            <video className="machine-related-video" controls key={index}>
              <source src={video} type="video/mp4"></source>
            </video>
          ))}
        </div>
      </div>
      <button
        className="show-more-button"
        onClick={() => setVideoShowMore(!videoShowMore)}
      >
        {videoShowMore ? 'Show less' : 'Show more'}
      </button>
    </section>
  );
}
