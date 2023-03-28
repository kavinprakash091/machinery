import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MachineScreen.css';

export default function RelatedImages({ heading, icon, relatedImages }) {
  const [imageShowMore, setImageShowMore] = useState(false);
  const [isImageExpand, setImageExpand] = useState(0);
  const [imageDownload, setImageDownload] = useState(0);

  return (
    <section>
      <div className="machine-related-images-container">
        <h2>
          <i className={icon}></i> {heading}
        </h2>
        <div
          className={
            imageShowMore
              ? 'machine-related-images-card-container big-related-image-container'
              : 'machine-related-images-card-container'
          }
        >
          {relatedImages.map((image, index) => (
            <div
              className={
                isImageExpand === index + 1
                  ? 'machine-related-images-card big-machine-related-images-card'
                  : 'machine-related-images-card'
              }
              key={index}
            >
              <img src={image} alt="machine" />
              <div
                className={
                  isImageExpand === index + 1
                    ? 'big-machine-related-images-card-footer'
                    : 'machine-related-images-card-footer'
                }
              >
                <i
                  className={
                    isImageExpand
                      ? 'fa-solid fa-compress'
                      : 'fa-solid fa-expand'
                  }
                  onClick={() => {
                    isImageExpand === index + 1
                      ? setImageExpand(0)
                      : setImageExpand(index + 1);
                  }}
                ></i>
                <i
                  class="fa-solid fa-ellipsis-vertical"
                  onClick={() => {
                    imageDownload === index + 1
                      ? setImageDownload(0)
                      : setImageDownload(index + 1);
                  }}
                ></i>
                {imageDownload === index + 1 && (
                  <Link
                    to={image}
                    className={
                      isImageExpand
                        ? 'machine-related-images-download big-machine-related-images-download'
                        : 'machine-related-images-download'
                    }
                    download={image}
                  >
                    <i className="fa-solid fa-down-long fa-bounce"></i> Download
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        <button
          className="show-more-button"
          onClick={() => setImageShowMore(!imageShowMore)}
        >
          {imageShowMore ? 'Show less' : 'Show more'}
        </button>
      </div>
    </section>
  );
}
