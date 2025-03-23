import React, { useEffect, useState } from "react";
import { useTimer } from "./hooks/useTimer";
import pomodoroImg from "./media/focusImg.png"; // Pomodoro Image
import breakImg from "./media/breakImg.png"; //
import drink from "./media/drink.png";
import play from "./media/play-button.png"; //
import reset from "./media/reset-button.png"; // Pomodoro Image



const App: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(pomodoroImg);
  const [isPomodoro, setIsPomodoro] = useState(true); // Tracks Pomodoro or Break mode

  const { time, startTimer, resetTimer, isRunning } = useTimer(25);

  useEffect(() => {
    setCurrentImage(isPomodoro ? pomodoroImg : breakImg);
  }, [isPomodoro]);

  const switchMode = () => {
    const newMinutes = isPomodoro ? 5 : 25;
    setIsPomodoro(!isPomodoro);
    resetTimer(newMinutes);
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
            <h2>{time}</h2>
          </div>
          <div className="row pt-5 timerButtons">
            <div className="col-lg-4 col-sm-3"></div>
            <div className="col-lg-2 col-sm-3">
              <a href="#">
                <img
                  src={play}
                  alt="play button"
                  width="50"
                  onClick={startTimer}
                />
              </a>
            </div>
            <div className="col-lg-2 col-sm-3">
              <a href="#">
                <img src={reset} alt="reset button" width="50" onClick={() => resetTimer(isPomodoro ? 25 : 5)} />
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
                  resetTimer(25);
                }}
              >
                Pomodoro
              </button>
            </div>
            <div className="col-lg-3 col-sm-3">
              <button
                className={`btn btn-outline-secondary ${
                  !isPomodoro ? "active" : ""
                }`}
                onClick={() => {
                  setIsPomodoro(false);
                  resetTimer(5);
                }}
              >
                Break
              </button>
            </div>
            <div className="col-lg-3 col-sm-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
