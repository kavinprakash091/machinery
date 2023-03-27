import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MachineScreen.css';

export default function RelatedImages() {
  const [imageShowMore, setImageShowMore] = useState(false);
  const [isImageExpand, setImageExpand] = useState(0);
  const [imageDownload, setImageDownload] = useState(0);
  return (
    <section>
      <div className="machine-related-images-container">
        <h2>
          <i className="fa-solid fa-camera fa-shake"></i> Related Images
        </h2>
        <div
          className={
            imageShowMore
              ? 'machine-related-images-card-container big-related-image-container'
              : 'machine-related-images-card-container'
          }
        >
          <div
            className={
              isImageExpand === 1
                ? 'machine-related-images-card big-machine-related-images-card'
                : 'machine-related-images-card'
            }
          >
            <img
              src={require('../assets/mini_dairy_plant.png')}
              alt="machine"
            />
            <div
              className={
                isImageExpand === 1
                  ? 'big-machine-related-images-card-footer'
                  : 'machine-related-images-card-footer'
              }
            >
              <i
                className={
                  isImageExpand ? 'fa-solid fa-compress' : 'fa-solid fa-expand'
                }
                onClick={() => {
                  isImageExpand === 1 ? setImageExpand(0) : setImageExpand(1);
                }}
              ></i>
              <i
                class="fa-solid fa-ellipsis-vertical"
                onClick={() => {
                  imageDownload === 1
                    ? setImageDownload(0)
                    : setImageDownload(1);
                }}
              ></i>
              {imageDownload === 1 && (
                <Link
                  to="mini_dairy_plant.png"
                  className={
                    isImageExpand
                      ? 'machine-related-images-download big-machine-related-images-download'
                      : 'machine-related-images-download'
                  }
                  download="mini_dairy_plant.png"
                >
                  <i className="fa-solid fa-down-long fa-bounce"></i> Download
                </Link>
              )}
            </div>
          </div>

          <div
            className={
              isImageExpand === 2
                ? 'machine-related-images-card big-machine-related-images-card'
                : 'machine-related-images-card'
            }
          >
            <img
              src={require('../assets/mini_dairy_plant.png')}
              alt="machine"
            />
            <div
              className={
                isImageExpand === 2
                  ? 'big-machine-related-images-card-footer'
                  : 'machine-related-images-card-footer'
              }
            >
              <i
                className={
                  isImageExpand ? 'fa-solid fa-compress' : 'fa-solid fa-expand'
                }
                onClick={() => {
                  isImageExpand === 2 ? setImageExpand(0) : setImageExpand(2);
                }}
              ></i>
              <i
                class="fa-solid fa-ellipsis-vertical"
                onClick={() => {
                  imageDownload === 2
                    ? setImageDownload(0)
                    : setImageDownload(2);
                }}
              ></i>
              {imageDownload === 2 && (
                <Link
                  to="mini_dairy_plant.png"
                  className={
                    isImageExpand
                      ? 'machine-related-images-download big-machine-related-images-download'
                      : 'machine-related-images-download'
                  }
                  download="mini_dairy_plant.png"
                >
                  <i className="fa-solid fa-down-long fa-bounce"></i> Download
                </Link>
              )}
            </div>
          </div>

          <div
            className={
              isImageExpand === 3
                ? 'machine-related-images-card big-machine-related-images-card'
                : 'machine-related-images-card'
            }
          >
            <img
              src={require('../assets/mini_dairy_plant.png')}
              alt="machine"
            />
            <div
              className={
                isImageExpand === 3
                  ? 'big-machine-related-images-card-footer'
                  : 'machine-related-images-card-footer'
              }
            >
              <i
                className={
                  isImageExpand ? 'fa-solid fa-compress' : 'fa-solid fa-expand'
                }
                onClick={() => {
                  isImageExpand === 3 ? setImageExpand(0) : setImageExpand(3);
                }}
              ></i>
              <i
                class="fa-solid fa-ellipsis-vertical"
                onClick={() => {
                  imageDownload === 1
                    ? setImageDownload(0)
                    : setImageDownload(3);
                }}
              ></i>
              {imageDownload === 3 && (
                <Link
                  to="mini_dairy_plant.png"
                  className={
                    isImageExpand
                      ? 'machine-related-images-download big-machine-related-images-download'
                      : 'machine-related-images-download'
                  }
                  download="mini_dairy_plant.png"
                >
                  <i className="fa-solid fa-down-long fa-bounce"></i> Download
                </Link>
              )}
            </div>
          </div>

          <div
            className={
              isImageExpand === 4
                ? 'machine-related-images-card big-machine-related-images-card'
                : 'machine-related-images-card'
            }
          >
            <img
              src={require('../assets/mini_dairy_plant.png')}
              alt="machine"
            />
            <div
              className={
                isImageExpand === 4
                  ? 'big-machine-related-images-card-footer'
                  : 'machine-related-images-card-footer'
              }
            >
              <i
                className={
                  isImageExpand ? 'fa-solid fa-compress' : 'fa-solid fa-expand'
                }
                onClick={() => {
                  isImageExpand === 4 ? setImageExpand(0) : setImageExpand(4);
                }}
              ></i>
              <i
                class="fa-solid fa-ellipsis-vertical"
                onClick={() => {
                  imageDownload === 4
                    ? setImageDownload(0)
                    : setImageDownload(4);
                }}
              ></i>
              {imageDownload === 4 && (
                <Link
                  to="mini_dairy_plant.png"
                  className={
                    isImageExpand
                      ? 'machine-related-images-download big-machine-related-images-download'
                      : 'machine-related-images-download'
                  }
                  download="mini_dairy_plant.png"
                >
                  <i className="fa-solid fa-down-long fa-bounce"></i> Download
                </Link>
              )}
            </div>
          </div>

          <div
            className={
              isImageExpand === 5
                ? 'machine-related-images-card big-machine-related-images-card'
                : 'machine-related-images-card'
            }
          >
            <img
              src={require('../assets/mini_dairy_plant.png')}
              alt="machine"
            />
            <div
              className={
                isImageExpand === 5
                  ? 'big-machine-related-images-card-footer'
                  : 'machine-related-images-card-footer'
              }
            >
              <i
                className={
                  isImageExpand ? 'fa-solid fa-compress' : 'fa-solid fa-expand'
                }
                onClick={() => {
                  isImageExpand === 5 ? setImageExpand(0) : setImageExpand(5);
                }}
              ></i>
              <i
                class="fa-solid fa-ellipsis-vertical"
                onClick={() => {
                  imageDownload === 5
                    ? setImageDownload(0)
                    : setImageDownload(5);
                }}
              ></i>
              {imageDownload === 5 && (
                <Link
                  to="mini_dairy_plant.png"
                  className={
                    isImageExpand
                      ? 'machine-related-images-download big-machine-related-images-download'
                      : 'machine-related-images-download'
                  }
                  download="mini_dairy_plant.png"
                >
                  <i className="fa-solid fa-down-long fa-bounce"></i> Download
                </Link>
              )}
            </div>
          </div>
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
