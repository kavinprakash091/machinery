import React, { useState } from 'react';
import '../styles/MachineScreen.css';

export default function RelatedVideos() {
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
          <video className="machine-related-video" controls>
            <source
              src={require('../assets/machine_video.mp4')}
              type="video/mp4"
            ></source>
          </video>
          <video className="machine-related-video" controls>
            <source
              src={require('../assets/machine_video.mp4')}
              type="video/mp4"
            ></source>
          </video>
          <video className="machine-related-video" controls>
            <source
              src={require('../assets/machine_video.mp4')}
              type="video/mp4"
            ></source>
          </video>
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
