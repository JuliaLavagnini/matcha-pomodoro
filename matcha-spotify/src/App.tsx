import React, { useEffect, useState } from "react";
import pomodoroImg from "./media/focusImg.png"; // Pomodoro Image
import breakImg from "./media/breakImg.png"; //
import drink from "./media/drink.png";
import spotifyLogo from "./media/spotify-logo.png"; // Pomodoro Image
import play from "./media/play-button.png"; //
import pause from "./media/pause-button.png";
import reset from "./media/reset-button.png"; // Pomodoro Image
import next from "./media/next-button.png"; //
import previous from "./media/previous-button.png";

const App: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(pomodoroImg);
  const [isPomodoro, setIsPomodoro] = useState(true); // Tracks Pomodoro or Break mode
  const [timerValue, setTimerValue] = useState(25);

  useEffect(() => {
    setCurrentImage(isPomodoro? pomodoroImg : breakImg)
  }, [isPomodoro]);

  const switchMode = () => {
    setIsPomodoro((prev) => !prev);
    setTimerValue((prev) => (isPomodoro ? 5 : 25));
  };

  return (
    <div className="container-md ">
      <div className="row text-center">
        <div className="col-6 col-md-6 col-sm-12">
          <img src={drink} alt="drink" className="floating-img" width="500" />
        </div>
        <div className="col-6 col-md-6 col-sm-12 pomodoro">
          <div className="row">
            <img src={currentImage} alt="focus time!" />
          </div>
          <div className="row">
            <h2>{timerValue}</h2>
          </div>
          <div className="row pt-5 timerButtons">
            <div className="col-lg-4 col-sm-3"></div>
            <div className="col-lg-2 col-sm-3">
              <a href="#">
                <img src={play} alt="play button" width="50" />
              </a>
            </div>
            <div className="col-lg-2 col-sm-3">
              <a href="#">
                <img src={reset} alt="reset button" width="50" />
              </a>
            </div>
            <div className="col-lg-4 col-sm-3"></div>
          </div>
          <div className="row pt-5 buttonsControl ">
            <div className="col-lg-3 col-sm-3"></div>
            <div className="col-lg-3 col-sm-3">
              <button
                className={`btn btn-outline-secondary ${
                  isPomodoro ? "active" : ""
                }`}
                onClick={() => {
                  setIsPomodoro(true);
                  setTimerValue(25);
                }}
              >
                Pomodoro
              </button>
            </div>
            <div className="col-lg-3 col-sm-3">
              <button
                className={`btn btn-outline-secondary ${
                  isPomodoro ? "active" : ""
                }`}
                onClick={() => {
                  setIsPomodoro(false);
                  setTimerValue(5);
                }}
              >
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
              <img src={spotifyLogo} alt="spotify-logo" width="60" />
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
                  <img src={previous} alt="previous button" width="30" />
                </a>
              </div>
              <div className="col-3">
                <a href="#">
                  <img src={play} alt="play button" width="30" />
                </a>
              </div>
              <div className="col-4">
                <a href="#">
                  <img src={next} alt="next button" width="30" />
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
