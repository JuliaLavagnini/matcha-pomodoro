import React, { useEffect, useState } from "react";
import { useTimer } from "./hooks/useTimer";
import pomodoroImg from "./media/focusImg.png";
import breakImg from "./media/breakImg.png";
import drink from "./media/drink.png";
import play from "./media/play-button.png";
import reset from "./media/reset-button.png";
import plus from "./media/plus.png";
import minus from "./media/minus.png";

const App: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(pomodoroImg);
  const [isPomodoro, setIsPomodoro] = useState(true);
  const [timerValue, setTimerValue] = useState(25);

  const handleIncrease = () => {
    const max = isPomodoro ? 40 : 15;
    const step = 5;
    if (timerValue < max) {
      const newValue = timerValue + step;
      setTimerValue(newValue);
      resetTimer(newValue);
    }
  };

  const handleDecrease = () => {
    const min = isPomodoro ? 25 : 5;
    const step = 5;
    if (timerValue > min) {
      const newValue = timerValue - step;
      setTimerValue(newValue);
      resetTimer(newValue);
    }
  };

  const { time, startTimer, resetTimer, isRunning } = useTimer(timerValue);

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
          <div className="row pt-1 controls">
            <div className="col-lg-4 col-sm-3"></div>
            <div className="col-lg-2 col-sm-3">
              <a href="#">
                <img
                  src={plus}
                  alt="plus button"
                  width="50"
                  className={`icon ${isRunning ? "disabled" : ""}`}
                  onClick={() => {
                    if (!isRunning) handleIncrease();
                  }}
                />
              </a>
            </div>
            <div className="col-lg-2 col-sm-3">
              <a href="#">
                <img
                  src={minus}
                  alt="minus button"
                  width="50"
                  className={`icon ${isRunning ? "disabled" : ""}`}
                  onClick={() => {
                    if (!isRunning) handleDecrease();
                  }}
                />
              </a>
            </div>
            <div className="col-lg-4 col-sm-3"></div>
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
                <img
                  src={reset}
                  alt="reset button"
                  width="50"
                  onClick={() => resetTimer(isPomodoro ? 25 : 5)}
                />
              </a>
            </div>
            <div className="col-lg-4 col-sm-3"></div>
          </div>
          <div className="row pt-5 modeButtons ">
            <div className="col-lg-3 col-sm-3"></div>
            <div className="col-lg-3 col-sm-3">
              <button
                className={`btn btn-outline-secondary ${
                  isPomodoro ? "active" : ""
                }`}
                onClick={() => {
                  setIsPomodoro(true);
                  setTimerValue(25);
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
                  setTimerValue(5);
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
