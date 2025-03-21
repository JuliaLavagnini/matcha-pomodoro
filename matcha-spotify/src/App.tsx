import React from "react";

const App: React.FC = () => {
  return (
    <div className="container-md ">
      <div className="row text-center">
        <div className="col-6 col-md-6 col-sm-12">
          <img
            src="/assets/drink.png"
            alt="drink"
            className="floating-img"
            width="500"
          />
        </div>
        <div className="col-6 col-md-6 col-sm-12 pomodoro">
          <div className="row">
            <img src="/assets/focus-time!.png" alt="focus time!" />
          </div>
          <div className="row">
            <h2>30:00</h2>
          </div>
          <div className="row pt-5 timerButtons">
            <div className="col-lg-4 col-sm-3"></div>
            <div className="col-lg-2 col-sm-3">
              <a href="#">
                <img
                  src="/assets/play-button.png"
                  alt="play button"
                  width="50"
                />
              </a>
            </div>
            <div className="col-lg-2 col-sm-3">
              <a href="#">
                <img
                  src="/assets/reset-button.png"
                  alt="reset button"
                  width="50"
                />
              </a>
            </div>
            <div className="col-lg-4 col-sm-3"></div>
          </div>
          <div className="row pt-5 buttonsControl ">
            <div className="col-lg-3 col-sm-3"></div>
            <div className="col-lg-3 col-sm-3">
              <button type="button" className="btn btn-outline-secondary">
                Pomodoro
              </button>
            </div>
            <div className="col-lg-3 col-sm-3">
              <button type="button" className="btn btn-outline-secondary">
                Break
              </button>
            </div>
            <div className="col-lg-3 col-sm-3"></div>
          </div>
        </div>
      </div>
      <div className="container spotifyPlay">
        <div className="row">
          <div className="col-2 text-center ">
            <a href="#">
              <img
                src="/assets/spotify-logo.png"
                alt="spotify-logo"
                width="60"
              />
            </a>
          </div>
          <div className="col-6">
            <div className="row">
              <h3>Sweet Dream</h3>
            </div>
            <div className="row">
              <h4>j-hope, Miguel</h4>
            </div>
          </div>
          <div className="col-4 pe-3 musicPlay text-center">
            <div className="row">
              <div className="col-4">
                <a href="#">
                  <img
                    src="/assets/previous-button.png"
                    alt="previous button"
                    width="30"
                  />
                </a>
              </div>
              <div className="col-3">
                <a href="#">
                  <img
                    src="/assets/play-button.png"
                    alt="play button"
                    width="30"
                  />
                </a>
              </div>
              <div className="col-4">
                <a href="#">
                  <img
                    src="/assets/next-button.png"
                    alt="next button"
                    width="30"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
