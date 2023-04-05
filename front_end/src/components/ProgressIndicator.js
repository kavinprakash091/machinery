import React from 'react';

export default function ProgressIndicator({ progress }) {
  return (
    <section className="progress-indicator-container">
      <div
        className={
          progress >= 1 ? 'bar-container active-bar-container' : 'bar-container'
        }
      >
        <h3>Sign-in</h3>
        <div className="progress-line-container">
          <div
            className={
              progress >= 1
                ? 'progress-outer-circle active-progress-outer-circle'
                : 'progress-outer-circle'
            }
          >
            <div
              className={
                progress >= 1
                  ? 'progress-inner-circle active-progress-inner-circle'
                  : 'progress-inner-circle'
              }
            ></div>
          </div>
          <div
            className={
              progress >= 1
                ? 'progress-line active-progress-line'
                : 'progress-line'
            }
          ></div>
        </div>
      </div>
      <div
        className={
          progress >= 1 ? 'bar-container active-bar-container' : 'bar-container'
        }
      >
        <h3>Shipping</h3>
        <div className="progress-line-container">
          <div
            className={
              progress >= 1
                ? 'progress-outer-circle active-progress-outer-circle'
                : 'progress-outer-circle'
            }
          >
            <div
              className={
                progress >= 1
                  ? 'progress-inner-circle active-progress-inner-circle'
                  : 'progress-inner-circle'
              }
            ></div>
          </div>
          <div
            className={
              progress >= 2
                ? 'progress-line active-progress-line'
                : 'progress-line'
            }
          ></div>
        </div>
      </div>
      <div
        className={
          progress >= 2 ? 'bar-container active-bar-container' : 'bar-container'
        }
      >
        <h3>Payment</h3>
        <div className="progress-line-container">
          <div
            className={
              progress >= 2
                ? 'progress-outer-circle active-progress-outer-circle'
                : 'progress-outer-circle'
            }
          >
            <div
              className={
                progress >= 2
                  ? 'progress-inner-circle active-progress-inner-circle'
                  : 'progress-inner-circle'
              }
            ></div>
          </div>
          <div
            className={
              progress >= 3
                ? 'progress-line active-progress-line'
                : 'progress-line'
            }
          ></div>
        </div>
      </div>
      <div
        className={
          progress >= 3 ? 'bar-container active-bar-container' : 'bar-container'
        }
      >
        <h3>Placeorder</h3>
        <div className="progress-line-container">
          <div
            className={
              progress >= 3
                ? 'progress-outer-circle active-progress-outer-circle'
                : 'progress-outer-circle'
            }
          >
            <div
              className={
                progress >= 3
                  ? 'progress-inner-circle active-progress-inner-circle'
                  : 'progress-inner-circle'
              }
            ></div>
          </div>
          <div
            className={
              progress >= 4
                ? 'progress-line active-progress-line'
                : 'progress-line'
            }
          ></div>
        </div>
      </div>
      <div
        className={
          progress >= 4 ? 'bar-container active-bar-container' : 'bar-container'
        }
      >
        <h3>Delivered</h3>
        <div className="progress-line-container">
          <div
            className={
              progress >= 4
                ? 'progress-outer-circle1 active-progress-outer-circle1'
                : 'progress-outer-circle1'
            }
          >
            <div
              className={
                progress >= 4
                  ? 'progress-inner-circle active-progress-inner-circle'
                  : 'progress-inner-circle'
              }
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
